import {GameStateManager} from './GameStateManager';
import {MatchmakingManager} from './MatchmakingManager';
import {ClientId} from './public/structs/ClientId';
import {GameState} from './public/structs/GameState';
import {LobbyId} from './public/structs/LobbyId';
import {Move} from './public/structs/Move';
import {PlayerId} from './public/structs/PlayerId';

export class ServerManager {
  private matchmaking: MatchmakingManager;
  private activeGames: Record<string, GameStateManager>;

  constructor() {
    this.matchmaking = new MatchmakingManager();
    this.activeGames = {};
  }

  StartLobby(): ClientId {
    return this.matchmaking.StartLobby();
  }

  JoinLobby(lobbyId: LobbyId): ClientId {
    const [clientId, playerIds] = this.matchmaking.JoinLobby(lobbyId);
    const game = new GameStateManager(playerIds);
    this.activeGames[lobbyId] = game;
    return clientId;
  }

  GetState(lobbyId: LobbyId, player: PlayerId): GameState {
    return this.activeGames[lobbyId].GetState(player);
  }

  SubmitMove(lobbyId: string, move: Move) {
    this.activeGames[lobbyId].SubmitMove(move);
  }
}
