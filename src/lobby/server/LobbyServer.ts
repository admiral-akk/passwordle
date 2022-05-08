import {EndGameState} from '../../game/client/view/subview/EndGameView';
import {PlayerId} from '../../PlayerId';
import {GenerateLobbyId, LobbyId} from '../LobbyId';
import {
  LobbyClientRequests,
  LobbyServerRequests,
  LobbyServerSocket,
} from './LobbyNetworkTypes';

export class LobbyServer {
  private lobbies: Record<string, LobbySocketManager> = {};
  private publicLobbies: LobbySocketManager[] = [];
  constructor(private EnterGame: (players: PlayerId[]) => void) {}
  PlayerJoins(socket: LobbyServerSocket) {
    const playerId = socket.data.playerId!;
    this.lobbies[playerId] = new LobbySocketManager(
      socket,
      () => this.FindMatch(playerId),
      (lobbyId: string) => this.JoinLobby(playerId, lobbyId),
      () => this.RequestLobbyId(playerId),
      (playerId: PlayerId) => this.PlayerDisconnected(playerId)
    );
  }

  PlayerDisconnected(playerId: PlayerId) {
    for (let i = 0; i < this.publicLobbies.length; i++) {
      if (this.publicLobbies[i].GetPlayer() === playerId) {
        this.publicLobbies.splice(i);
        break;
      }
    }
    if (playerId in this.lobbies) {
      delete this.lobbies[playerId];
    }
  }

  EndGame(
    sockets: LobbyServerSocket[],
    ending: Record<PlayerId, EndGameState>
  ) {
    const players = sockets.map(socket => socket.data.playerId!);
    const lobbies = players.map(player => this.lobbies[player]);
  }

  private FindMatch(playerId: PlayerId) {
    const lobby = this.lobbies[playerId];
    if (this.publicLobbies.length === 0) {
      this.publicLobbies.push(lobby);
      lobby.FindingMatch();
    } else {
      const other = this.publicLobbies.pop()!;
      this.ConnectLobbies(lobby, other);
    }
  }

  private RequestLobbyId(playerId: PlayerId) {
    this.lobbies[playerId].EnterMenu();
  }

  private JoinLobby(playerId: PlayerId, lobbyId: string) {
    const playerLobby = this.lobbies[playerId];
    if (lobbyId in this.lobbies) {
      this.ConnectLobbies(playerLobby, this.lobbies[lobbyId]);
    } else {
      playerLobby.EnterMenu();
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
  lobbyId: LobbyId;

  GetPlayer(): PlayerId {
    return this.socket.data.playerId!;
  }

  constructor(
    private socket: LobbyServerSocket,
    public FindMatch: () => void,
    public JoinLobby: (lobbyId: string) => void,
    public RequestLobbyId: () => void,
    public PlayerDisconnect: (playerId: PlayerId) => void
  ) {
    this.lobbyId = GenerateLobbyId(socket);
    this.RegisterSocket(socket);
  }

  // LobbyClientRequests
  EnterMenu() {
    this.lobbyId = GenerateLobbyId(this.socket);
    this.socket.emit('EnterMenu', this.lobbyId);
  }

  FindingMatch() {
    this.socket.emit('FindingMatch');
  }

  MatchFound(lobbyId: LobbyId) {
    this.socket.emit('MatchFound', lobbyId);
  }

  private RegisterSocket(socket: LobbyServerSocket) {
    socket.on('FindMatch', () => this.FindMatch());
    socket.on('JoinLobby', (lobbyId: LobbyId) => this.JoinLobby(lobbyId));
    socket.on('RequestLobbyId', () => this.RequestLobbyId());
    socket.on('disconnect', () => {
      this.PlayerDisconnect(this.GetPlayer());
    });
  }
}
