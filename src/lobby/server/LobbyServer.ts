import {PlayerId} from '../../structs/PlayerId';
import {GenerateLobbyId, LobbyId} from '../../structs/LobbyId';
import {Lobby} from './Lobby';
import {
  ToClientLobbyEvents,
  ToServerLobbyEvents,
  LobbyServerSocket,
} from '../../network/LobbyNetworkTypes';

export class LobbyServer {
  private lobbies: Record<LobbyId, Lobby> = {};
  private publicLobbies: LobbyId[] = [];
  private players: Record<PlayerId, LobbySocketManager> = {};

  constructor(private EnterGame: (players: PlayerId[]) => void) {}

  private RequestRematch(playerId: PlayerId) {
    const lobbyId = this.players[playerId].lobbyId;
    const lobby = this.lobbies[lobbyId];
    lobby.RequestRematch(playerId);
    if (lobby.rematchRequested.length === 2) {
      lobby.rematchRequested = [];
      this.StartGame(lobby);
    }
  }

  PlayerJoins(socket: LobbyServerSocket) {
    const playerId = socket.data.playerId!;
    this.players[playerId] = new LobbySocketManager(
      socket,
      () => this.FindMatch(playerId),
      (lobbyId: LobbyId) => this.JoinLobby(playerId, lobbyId),
      () => this.RequestLobbyId(playerId),
      (playerId: PlayerId) => this.PlayerDisconnected(playerId),
      () => this.RequestRematch(playerId),
      () => this.DeclineRematch(playerId)
    );
  }

  PlayerDisconnected(playerId: PlayerId) {
    const lobbyId = this.players[playerId].lobbyId;
    if (lobbyId in this.lobbies) {
      const index = this.lobbies[lobbyId].players.indexOf(playerId);
      if (index !== -1) {
        this.lobbies[lobbyId].players.splice(index, 1);
      }
      if (this.lobbies[lobbyId].players.length === 0) {
        delete this.lobbies[lobbyId];
      }
    }
    if (this.publicLobbies.indexOf(lobbyId) > -1) {
      this.publicLobbies.splice(this.publicLobbies.indexOf(lobbyId));
    }
    if (playerId in this.players) {
      delete this.players[playerId];
    }
  }

  private DeleteLobby(lobbyId: LobbyId) {
    if (lobbyId in this.lobbies) {
      delete this.lobbies[lobbyId];
    }
    if (this.publicLobbies.indexOf(lobbyId) > -1) {
      this.publicLobbies.splice(this.publicLobbies.indexOf(lobbyId));
    }
  }

  private DeclineRematch(playerId: PlayerId) {
    const lobbyId = this.players[playerId].lobbyId;
    const players = this.lobbies[lobbyId].players;
    this.DeleteLobby(lobbyId);
    players.forEach(playerId => {
      this.RequestLobbyId(playerId);
    });
  }

  EndGame(sockets: LobbyServerSocket[]) {}

  private FindMatch(playerId: PlayerId) {
    if (this.publicLobbies.length === 0) {
      const lobbyId = this.players[playerId].lobbyId;
      this.publicLobbies.push(lobbyId);
      this.players[playerId].FindingMatch();
    } else {
      const lobbyId = this.publicLobbies.pop()!;
      this.AddToLobby(this.lobbies[lobbyId], playerId);
    }
  }

  private AddToLobby(lobby: Lobby, playerId: PlayerId) {
    lobby.players.push(playerId);
    const oldLobbyId = this.players[playerId].lobbyId;
    this.DeleteLobby(oldLobbyId);
    this.players[playerId].lobbyId = lobby.lobbyId;
    this.StartGame(lobby);
  }

  private StartGame(lobby: Lobby) {
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
    this.lobbies[lobby.lobbyId] = lobby;
    this.players[playerId].EnterMenu();
  }

  private JoinLobby(playerId: PlayerId, lobbyId: LobbyId) {
    if (lobbyId in this.lobbies) {
      const lobby = this.lobbies[lobbyId];
      this.AddToLobby(lobby, playerId);
    } else {
      this.RequestLobbyId(playerId);
    }
  }
}

class LobbySocketManager implements ToServerLobbyEvents, ToClientLobbyEvents {
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
    public RequestRematch: () => void,
    public DeclineRematch: () => void
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
    socket.on('RequestRematch', () => this.RequestRematch());
    socket.on('DeclineRematch', () => this.DeclineRematch());
    socket.on('disconnect', () => {
      this.PlayerDisconnect(this.GetPlayer());
    });
  }

  GameReady() {
    this.socket.emit('GameReady');
  }
}
