import {ClientId} from './public/structs/ClientId';
import {LobbyId, ToLobbyId} from './public/structs/LobbyId';
import {PlayerId, ToPlayerId} from './public/structs/PlayerId';
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

  StartLobby(): ClientId {
    const lobbyId = ToLobbyId(this.GenerateId(Object.keys(this.lobbyIds)));
    const lobbyState = new LobbyState(lobbyId);
    const playerId = ToPlayerId(this.GenerateId(lobbyState.players));
    lobbyState.AddPlayer(playerId);
    this.openLobbyIds[lobbyId] = lobbyState;
    this.lobbyIds[lobbyId] = lobbyState;
    return new ClientId(lobbyId, playerId);
  }

  JoinLobby(lobbyId: LobbyId): [ClientId, PlayerId[]] {
    if (!(lobbyId in this.openLobbyIds)) {
      throw "Lobby doesn't exist!";
    }
    const lobbyState = this.openLobbyIds[lobbyId];
    const playerId = ToPlayerId(this.GenerateId(lobbyState.players));
    lobbyState.AddPlayer(playerId);
    delete this.openLobbyIds[lobbyId];
    this.lobbyIds[lobbyId] = lobbyState;
    return [new ClientId(lobbyId, playerId), lobbyState.players];
  }
}
