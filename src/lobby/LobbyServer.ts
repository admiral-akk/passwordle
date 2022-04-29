import {Socket} from 'socket.io';
import {
  LobbyClientToServerEvents,
  LobbyServerToClientEvents,
} from './client/LobbyNetworkEvents';
import {InterServerEvents, SocketData} from '../ServerNetworkTypes';
import {Lobby} from './Lobby';

type LobbySocket = Socket<
  LobbyClientToServerEvents,
  LobbyServerToClientEvents,
  InterServerEvents,
  SocketData
>;

export class LobbyServer {
  private privateLobby: Record<string, Lobby>;
  private publicLobby: Lobby[];

  constructor() {
    this.privateLobby = {};
    this.publicLobby = [];
  }

  AddSocket(socket: LobbySocket) {
    this.RegisterLobbyHandlers(socket);
  }

  private RegisterLobbyHandlers(socket: LobbySocket): void {
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
