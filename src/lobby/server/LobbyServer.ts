import {PlayerId} from '../../PlayerId';
import {
  LobbyClientRequests,
  LobbyServerRequests,
  NewLobbyServerSocket,
} from './LobbyNetworkTypes';

export class NewLobbyServer {
  private lobbies: Record<string, LobbySocketManager> = {};
  private publicLobbies: LobbySocketManager[] = [];
  constructor(private EnterGame: (players: PlayerId[]) => void) {}
  PlayerJoins(socket: NewLobbyServerSocket) {
    const playerId = socket.data.playerId!;
    this.lobbies[playerId] = new LobbySocketManager(
      socket,
      () => this.FindMatch(playerId),
      (lobbyId: string) => this.JoinLobby(playerId, lobbyId)
    );
  }

  EndGame(sockets: NewLobbyServerSocket[]) {
    const players = sockets.map(socket => socket.data.playerId!);
    const lobbies = players.map(player => this.lobbies[player]);
    lobbies.forEach(lobby => lobby.GameEnded());
  }

  private FindMatch(playerId: PlayerId) {
    const lobby = this.lobbies[playerId];
    if (this.publicLobbies.length === 0) {
      this.publicLobbies.push(lobby);
    } else {
      const other = this.publicLobbies.pop()!;
      this.ConnectLobbies(lobby, other);
    }
  }

  private JoinLobby(playerId: PlayerId, lobbyId: string) {
    const playerLobby = this.lobbies[playerId];
    if (lobbyId in this.lobbies) {
      this.ConnectLobbies(playerLobby, this.lobbies[lobbyId]);
    } else {
      playerLobby.EnterMenu(playerLobby.lobbyId);
    }
  }

  private ConnectLobbies(lobby: LobbySocketManager, other: LobbySocketManager) {
    lobby.lobbyId = other.lobbyId;
    lobby.MatchFound(lobby.lobbyId);
    other.MatchFound(other.lobbyId);
    this.EnterGame([lobby.GetPlayer(), other.GetPlayer()]);
  }
}

class LobbySocketManager implements LobbyServerRequests, LobbyClientRequests {
  lobbyId: string;

  GetPlayer(): PlayerId {
    return this.socket.data.playerId!;
  }

  constructor(
    private socket: NewLobbyServerSocket,
    public FindMatch: () => void,
    public JoinLobby: (lobbyId: string) => void
  ) {
    this.lobbyId = socket.data.playerId!;
    this.RegisterSocket(socket);
    socket.emit('EnterMenu', socket.data.playerId!);
  }
  GameEnded() {
    this.socket.emit('GameEnded');
  }
  EnterMenu(lobbyId: string) {
    this.socket.emit('EnterMenu', lobbyId);
  }
  MatchFound(lobbyId: string) {
    this.socket.emit('MatchFound', lobbyId);
  }

  private RegisterSocket(socket: NewLobbyServerSocket) {
    socket.on('FindMatch', () => this.FindMatch());
    socket.on('JoinLobby', (lobbyId: string) => this.JoinLobby(lobbyId));
  }
}
