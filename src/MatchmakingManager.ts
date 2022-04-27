import {ClientId} from './public/structs/ClientId';
import {LobbyId, GenerateRandomLobbyId} from './public/structs/LobbyId';
import {PlayerId, GenerateRandomPlayerId} from './public/structs/PlayerId';
import {LobbyState} from './structs/LobbyState';

export class MatchmakingManager {
  private openLobbyIds: Record<LobbyId, LobbyState>;
  private lobbyIds: Record<LobbyId, LobbyState>;

  constructor() {
    this.openLobbyIds = {};
    this.lobbyIds = {};
  }

  private GenerateId(existingIds: string[]): string {
    let id: string;
    do {
      id = Math.floor(Math.random() * 100000).toString();
    } while (id in existingIds);
    return id;
  }

  private GeneratePlayerId(players: PlayerId[]): PlayerId {
    let id: PlayerId;
    do {
      id = GenerateRandomPlayerId();
    } while (id in players);
    return id;
  }

  private GenerateLobbyId(): LobbyId {
    let id: LobbyId;
    do {
      id = GenerateRandomLobbyId();
    } while (id in Object.keys(this.lobbyIds));
    return id;
  }

  StartLobby(): ClientId {
    const lobbyId = this.GenerateLobbyId();
    const lobbyState = new LobbyState(lobbyId);
    const playerId = this.GeneratePlayerId(lobbyState.players);
    lobbyState.AddPlayer(playerId);
    console.log(`created lobby: ${lobbyId}`);
    this.openLobbyIds[lobbyId] = lobbyState;
    this.lobbyIds[lobbyId] = lobbyState;
    return new ClientId(lobbyId, playerId);
  }

  JoinLobby(lobbyId: LobbyId): [ClientId, PlayerId[]] {
    if (!(lobbyId in this.openLobbyIds)) {
      throw "Lobby doesn't exist!";
    }
    const lobbyState = this.openLobbyIds[lobbyId];
    const playerId = this.GeneratePlayerId(lobbyState.players);
    lobbyState.AddPlayer(playerId);
    delete this.openLobbyIds[lobbyId];
    this.lobbyIds[lobbyId] = lobbyState;
    return [new ClientId(lobbyId, playerId), lobbyState.players];
  }
}
