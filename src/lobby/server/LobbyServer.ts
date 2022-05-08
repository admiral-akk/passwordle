import {PlayerId} from '../../PlayerId';
import {GenerateLobbyId, LobbyId} from '../LobbyId';
import {Lobby} from './Lobby';
import {
  LobbyClientRequests,
  LobbyServerRequests,
  LobbyServerSocket,
} from './LobbyNetworkTypes';

export class LobbyServer {
  private privateLobbies: Record<LobbyId, Lobby> = {};
  private publicLobbies: Lobby[] = [];
  private players: Record<PlayerId, LobbySocketManager> = {};
  private rematchRequests: Record<LobbyId, PlayerId> = {};

  constructor(private EnterGame: (players: PlayerId[]) => void) {}

  PlayerJoins(socket: LobbyServerSocket) {
    const playerId = socket.data.playerId!;
    this.players[playerId] = new LobbySocketManager(
      socket,
      () => this.FindMatch(playerId),
      (lobbyId: LobbyId) => this.JoinLobby(playerId, lobbyId),
      () => this.RequestLobbyId(playerId),
      (playerId: PlayerId) => this.PlayerDisconnected(playerId),
      () => this.RequestRematch(playerId)
    );
  }

  PlayerDisconnected(playerId: PlayerId) {
    const lobbyId = this.players[playerId].lobbyId;
    if (lobbyId in this.privateLobbies) {
      const index = this.privateLobbies[lobbyId].players.indexOf(playerId);
      if (index !== -1) {
        this.privateLobbies[lobbyId].players.splice(index, 1);
      }
      if (this.privateLobbies[lobbyId].players.length === 0) {
        delete this.privateLobbies[lobbyId];
      }
    }
    for (let i = 0; i < this.publicLobbies.length; i++) {
      if (this.publicLobbies[i].players.indexOf(playerId) > -1) {
        this.publicLobbies.splice(i);
        break;
      }
    }
    if (playerId in this.players) {
      delete this.players[playerId];
    }
  }

  EndGame(sockets: LobbyServerSocket[]) {
    const players = sockets.map(socket => socket.data.playerId!);
    const lobbies = players.map(player => this.players[player]);
  }

  private FindMatch(playerId: PlayerId) {
    if (this.publicLobbies.length === 0) {
      const lobby = new Lobby([playerId], this.players[playerId].lobbyId);
      this.publicLobbies.push(lobby);
      this.players[playerId].FindingMatch();
    } else {
      const lobby = this.publicLobbies.pop()!;
      this.AddToLobby(lobby, playerId);
    }
  }

  private AddToLobby(lobby: Lobby, playerId: PlayerId) {
    lobby.players.push(playerId);
    this.players[playerId].lobbyId = lobby.lobbyId;
    lobby.players.forEach(playerId => {
      this.players[playerId].MatchFound(lobby.lobbyId);
      this.players[playerId].GameReady();
    });
    this.EnterGame(lobby.players);
  }

  private RequestLobbyId(playerId: PlayerId) {
    const lobby = new Lobby(
      [playerId],
      this.players[playerId].DefaultLobbyId()
    );
    this.privateLobbies[lobby.lobbyId] = lobby;
    this.players[playerId].EnterMenu();
  }

  private RequestRematch(playerId: PlayerId) {}

  private JoinLobby(playerId: PlayerId, lobbyId: LobbyId) {
    if (lobbyId in this.privateLobbies) {
      const lobby = this.privateLobbies[lobbyId];
      this.AddToLobby(lobby, playerId);
    } else {
      this.RequestLobbyId(playerId);
    }
  }
}

class LobbySocketManager implements LobbyServerRequests, LobbyClientRequests {
  lobbyId: LobbyId;

  DefaultLobbyId(): LobbyId {
    return GenerateLobbyId(this.socket);
  }

  GetPlayer(): PlayerId {
    return this.socket.data.playerId!;
  }

  constructor(
    private socket: LobbyServerSocket,
    public FindMatch: () => void,
    public JoinLobby: (lobbyId: LobbyId) => void,
    public RequestLobbyId: () => void,
    public PlayerDisconnect: (playerId: PlayerId) => void,
    public RequestRematch: () => void
  ) {
    this.lobbyId = GenerateLobbyId(socket);
    this.RegisterSocket(socket);
  }
  StartRematch(lobbyId: LobbyId) {}

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

  GameReady() {
    this.socket.emit('GameReady');
  }
}
