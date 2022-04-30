import {LobbyServer} from './lobby/LobbyServer';
import {LobbyServerSocket} from './lobby/LobbyServerSocket';

export class LobbyServerManager {
  private lobbies: Record<string, LobbyServer>;
  private matchmakingLobbyIds: string[];

  private startGame: (lobby: LobbyServerSocket[]) => void;

  constructor(startGame: (players: LobbyServerSocket[]) => void) {
    this.lobbies = {};
    this.matchmakingLobbyIds = [];
    this.startGame = startGame;
  }

  AddSocket(socket: LobbyServerSocket) {
    this.RegisterLobbyHandlers(socket);
    socket.data.isReady = true;
    const lobby = new LobbyServer([socket]);
    this.lobbies[socket.id] = lobby;
  }

  AddLobby(lobby: LobbyServer) {
    lobby.players.forEach(p => {
      if (p.id in this.lobbies) {
        this.lobbies[p.id] = lobby;
      }
    });
  }

  RematchMenu(players: LobbyServerSocket[]) {
    players.forEach(p => (p.data.isReady = false));
    const lobby = new LobbyServer(players);
    lobby.players.forEach(p => {
      if (p.id in this.lobbies) {
        this.lobbies[p.id] = lobby;
      }
    });
  }

  private CreatePrivateLobby(socket: LobbyServerSocket) {
    socket.emit('PrivateLobbyId', socket.id);
  }

  private EnterMatchmaking(socket: LobbyServerSocket) {
    if (this.matchmakingLobbyIds.length > 0) {
      const lobbyId = this.matchmakingLobbyIds.pop()!;
      this.Connect(this.lobbies[lobbyId], socket);
    } else {
      this.matchmakingLobbyIds.push(socket.id);
      socket.emit('PublicLobbyId');
    }
  }

  private JoinPrivateLobby(socket: LobbyServerSocket, lobbyId: string) {
    if (lobbyId in this.lobbies) {
      this.Connect(this.lobbies[lobbyId], socket);
    } else {
      console.log(`Tried to connect to non-existent lobby: ${lobbyId}`);
    }
  }

  private RegisterLobbyHandlers(socket: LobbyServerSocket): void {
    socket.on('HostPrivateLobby', () => this.CreatePrivateLobby(socket));
    socket.on('HostPublicLobby', () => this.EnterMatchmaking(socket));
    socket.on('JoinPrivateLobby', (lobbyId: string) =>
      this.JoinPrivateLobby(socket, lobbyId)
    );
    socket.on('AcceptRematch', () => this.AcceptRematch(socket));
    socket.on('RejectRematch', () => this.RejectRematch(socket));
  }

  private AcceptRematch(socket: LobbyServerSocket) {
    socket.data.isReady = true;
    if (this.lobbies[socket.id].Ready()) {
      this.StartGame(this.lobbies[socket.id]);
    } else {
      this.lobbies[socket.id].players.forEach(p => {
        if (p !== socket) {
          p.emit('RematchRequested');
        }
      });
    }
  }

  private RejectRematch(socket: LobbyServerSocket) {
    socket.data.isReady = false;
    const players = this.lobbies[socket.id].players;
    players.forEach(p => {
      this.lobbies[p.id] = new LobbyServer([p]);
      p.emit('RematchRefused');
    });
  }

  private Connect(lobby: LobbyServer, otherPlayer: LobbyServerSocket) {
    lobby.AddPlayer(otherPlayer);
    this.StartGame(lobby);
  }

  private StartGame(lobby: LobbyServer) {
    lobby.players.forEach(s => {
      s.emit('LobbyReady');
    });
    this.startGame(lobby.players);
    this.RemoveLobby(lobby);
  }

  private RemoveLobby(lobby: LobbyServer) {
    lobby.players.forEach(p => {
      if (p.id in this.lobbies) {
        delete this.lobbies[p.id];
      }
    });
  }
}
