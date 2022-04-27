import {GameStateManager} from './GameStateManager';
import {MatchmakingManager} from './MatchmakingManager';
import {AnnotatedMove} from './public/structs/AnnotatedMove';
import {ClientId} from './public/structs/ClientId';
import {GameState} from './public/structs/GameState';
import {LobbyId} from './public/structs/LobbyId';
import {NewMove} from './public/structs/Move';

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

  GetState(lobbyId: string, player: string): GameState {
    return this.activeGames[lobbyId].GetState(player);
  }

  SubmitMove(lobbyId: string, move: NewMove) {
    return this.activeGames[lobbyId].SubmitMove(move);
  }
}

export enum PlayerActions {
  JoinLobby, // send lobby id, get game state
  StartLobby, // send blank, get lobby id
  EnterGuess, // send guess + id + player, get knowledge + player (Move)
  DeleteChar, // send blank
  AddChar, // send char
  CopyLobbyLink, //  send blank
}

export enum GameActions {
  SendState, //  send id + Move[]
  SendGameId, // send id
  SendResults, // send knowledge
  RequestState, // send id + player
}
