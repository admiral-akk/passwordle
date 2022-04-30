import {LobbyServer} from './lobby/LobbyServer';
import {LobbyServerSocket} from './lobby/LobbyServerSocket';

export class LobbyServerManager {
  private lobbies: Record<string, LobbyServer>;
  private matchmakingLobbyIds: string[];

  private handoffLobby: (lobby: LobbyServer) => void;

  constructor(handoffLobby: (lobby: LobbyServer) => void) {
    this.lobbies = {};
    this.matchmakingLobbyIds = [];
    this.handoffLobby = handoffLobby;
  }

  CreatePrivateLobby(socket: LobbyServerSocket) {
    socket.emit('PrivateLobbyId', this.lobbies[socket.id].id);
  }

  EnterMatchmaking(socket: LobbyServerSocket) {
    if (this.matchmakingLobbyIds.length > 0) {
      const lobbyId = this.matchmakingLobbyIds.pop()!;
      this.Connect(this.lobbies[lobbyId], socket);
      delete this.lobbies[lobbyId];
    } else {
      this.matchmakingLobbyIds.push(socket.id);
      socket.emit('PublicLobbyId');
    }
  }

  JoinPrivateLobby(socket: LobbyServerSocket, lobbyId: string) {
    if (lobbyId in this.lobbies) {
      this.Connect(this.lobbies[lobbyId], socket);
      delete this.lobbies[lobbyId];
    } else {
      console.log(`Tried to connect to non-existent lobby: ${lobbyId}`);
    }
  }

  AddSocket(socket: LobbyServerSocket) {
    this.RegisterLobbyHandlers(socket);
    const lobby = new LobbyServer(socket);
    this.lobbies[lobby.id] = lobby;
  }

  private RegisterLobbyHandlers(socket: LobbyServerSocket): void {
    socket.on('HostPrivateLobby', () => this.CreatePrivateLobby(socket));
    socket.on('HostPublicLobby', () => this.EnterMatchmaking(socket));
    socket.on('JoinPrivateLobby', (lobbyId: string) =>
      this.JoinPrivateLobby(socket, lobbyId)
    );
  }

  private Connect(lobby: LobbyServer, otherPlayer: LobbyServerSocket) {
    lobby.AddPlayer(otherPlayer);
    lobby.players.forEach(s => {
      s.emit('LobbyReady');
    });
    this.handoffLobby(lobby);
  }
}
