import {LobbyId} from '../../structs/LobbyId';
import {LobbyModel, LobbyState} from './LobbyModel';

export class LobbyUpdate {
  state?: Delta<LobbyState>;
  lobbyId?: Delta<LobbyId | undefined>;
  playerCount?: Delta<number>;
  rematchRequestCount?: Delta<number>;
  requestedRematch?: Delta<boolean>;

  SetState(model: LobbyModel, newState: LobbyState) {
    this.state = new Delta(model.state, newState);
  }
  SetLobbyId(model: LobbyModel, newState?: LobbyId) {
    this.lobbyId = new Delta(model.lobbyId, newState);
  }
  SetPlayerCount(model: LobbyModel, newState: number) {
    this.playerCount = new Delta(model.playerCount, newState);
  }
  SetRematchCount(model: LobbyModel, newState: number) {
    this.rematchRequestCount = new Delta(model.rematchRequestCount, newState);
  }
  SetRequestedRematch(model: LobbyModel, newState: boolean) {
    this.requestedRematch = new Delta(model.requestedRematch, newState);
  }
}

export class Delta<Type> {
  constructor(public before: Type, public after: Type) {}
}
