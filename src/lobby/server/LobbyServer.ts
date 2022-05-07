import {EndGameState} from '../../game/client/view/subview/EndGameView';
import {PlayerId} from '../../PlayerId';
import {
  LobbyClientRequests,
  LobbyServerRequests,
  LobbyServerSocket,
} from './LobbyNetworkTypes';

export class NewLobbyServer {
  private lobbies: Record<string, LobbySocketManager> = {};
  private publicLobbies: LobbySocketManager[] = [];
  constructor(private EnterGame: (players: PlayerId[]) => void) {}
  PlayerJoins(socket: LobbyServerSocket) {
    const playerId = socket.data.playerId!;
    this.lobbies[playerId] = new LobbySocketManager(
      socket,
      () => this.FindMatch(playerId),
      (lobbyId: string) => this.JoinLobby(playerId, lobbyId),
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
    for (let i = 0; i < lobbies.length; i++) {
      lobbies[i].GameEnded(ending[players[i]]);
    }
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
    private socket: LobbyServerSocket,
    public FindMatch: () => void,
    public JoinLobby: (lobbyId: string) => void,
    public PlayerDisconnect: (playerId: PlayerId) => void
  ) {
    this.lobbyId = socket.data.playerId!;
    this.RegisterSocket(socket);
    socket.emit('EnterMenu', socket.data.playerId!);
  }
  GameEnded(ending: EndGameState) {
    this.socket.emit('GameEnded', ending);
  }
  EnterMenu(lobbyId: string) {
    this.socket.emit('EnterMenu', lobbyId);
  }
  MatchFound(lobbyId: string) {
    this.socket.emit('MatchFound', lobbyId);
  }

  private RegisterSocket(socket: LobbyServerSocket) {
    socket.on('FindMatch', () => this.FindMatch());
    socket.on('JoinLobby', (lobbyId: string) => this.JoinLobby(lobbyId));
    socket.on('disconnect', () => {
      this.PlayerDisconnect(this.GetPlayer());
    });
  }
}
