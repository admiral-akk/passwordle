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
      const lobby = new Lobby(socket);
      this.privateLobby[lobby.id] = lobby;
      socket.emit('PrivateLobbyId', lobby.id);
    });
    socket.on('HostPublicLobby', () => {
      if (this.publicLobby.length > 0) {
        this.Connect(this.publicLobby.pop()!, socket);
      } else {
        this.publicLobby.push(new Lobby(socket));
        socket.emit('PublicLobbyId');
      }
    });
    socket.on('JoinPrivateLobby', (lobbyId: string) => {
      if (lobbyId in this.privateLobby) {
        this.Connect(this.privateLobby[lobbyId], socket);
      } else {
        console.log(`Tried to connect to non-existent lobby: ${lobbyId}`);
      }
    });
  }

  private Connect(lobby: Lobby, otherPlayer: LobbyServerSocket) {
    lobby.AddPlayer(otherPlayer);
    lobby.players.forEach(s => {
      s.emit('LobbyReady');
    });
    this.handoffLobby(lobby);
  }
}

function GenerateLobbyId(takenIds: string[]): string {
  let lobbyId: string;
  do {
    lobbyId = Math.floor(Math.random() * 10000).toString();
  } while (lobbyId in takenIds);
  return lobbyId;
}
