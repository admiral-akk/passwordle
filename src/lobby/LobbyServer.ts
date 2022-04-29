import {Lobby} from './Lobby';
import {LobbyServerSocket} from './LobbyServerSocket';

export class LobbyServer {
  private privateLobby: Record<string, Lobby>;
  private publicLobby: Lobby[];

  private handoffLobby: (lobby: Lobby) => void;

  constructor(handoffLobby: (lobby: Lobby) => void) {
    this.privateLobby = {};
    this.publicLobby = [];
    this.handoffLobby = handoffLobby;
  }

  AddSocket(socket: LobbyServerSocket) {
    this.RegisterLobbyHandlers(socket);
  }

  private RegisterLobbyHandlers(socket: LobbyServerSocket): void {
    socket.on('HostPrivateLobby', () => {
      console.log(`HostPrivateLobby request from: ${socket.id}`);
      const lobby = new Lobby();
      lobby.players.push(socket);
      const lobbyId = GenerateLobbyId(Object.keys(this.privateLobby));
      this.privateLobby[lobbyId] = lobby;
      socket.emit('PrivateLobbyId', lobbyId);
    });
    socket.on('HostPublicLobby', () => {
      console.log(
        `befor public lobby request, length: ${this.publicLobby.length}`
      );
      if (this.publicLobby.length > 0) {
        const lobby = this.publicLobby.pop()!;
        lobby.players.push(socket);
        lobby.players.forEach(s => {
          s.emit('LobbyReady');
        });
        this.handoffLobby(lobby);
      } else {
        const lobby = new Lobby();
        lobby.players.push(socket);
        this.publicLobby.push(lobby);
        socket.emit('PublicLobbyId');
      }
      console.log(
        `after public lobby request, length: ${this.publicLobby.length}`
      );
    });
    socket.on('JoinPrivateLobby', (lobbyId: string) => {
      if (lobbyId in this.privateLobby) {
        this.privateLobby[lobbyId].players.push(socket);
        this.privateLobby[lobbyId].players.forEach(s => {
          s.emit('LobbyReady');
        });
      } else {
        console.log(`Tried to connect to non-existent lobby: ${lobbyId}`);
      }
    });
  }
}

function GenerateLobbyId(takenIds: string[]): string {
  let lobbyId: string;
  do {
    lobbyId = Math.floor(Math.random() * 10000).toString();
  } while (lobbyId in takenIds);
  return lobbyId;
}
