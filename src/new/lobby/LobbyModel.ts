import {LobbyId} from '../../structs/LobbyId';
import {Command} from '../Command';
import {CommandHandler} from '../CommandHandler';
import {LobbyUpdate} from './LobbyUpdate';

export enum LobbyState {
  None,
  InLobby,
  LookingForMatch,
  Rematch,
  InGame,
}

export class LobbyModel extends CommandHandler<LobbyModel, LobbyUpdate> {
  protected Execute(command: Command<LobbyModel, LobbyUpdate>): void {
    command.Execute(this);
  }
  protected Apply(update: LobbyUpdate): void {
    if (update.lobbyId) {
      this.lobbyId = update.lobbyId.after;
    }
    if (update.state) {
      this.state = update.state.after;
    }
    if (update.playerCount) {
      this.playerCount = update.playerCount.after;
    }
    if (update.rematchRequestCount) {
      this.rematchRequestCount = update.rematchRequestCount.after;
    }
    if (update.requestedRematch) {
      this.requestedRematch = update.requestedRematch.after;
    }
  }
  protected Undo(update: LobbyUpdate): void {
    if (update.lobbyId) {
      this.lobbyId = update.lobbyId.before;
    }
    if (update.state) {
      this.state = update.state.before;
    }
    if (update.playerCount) {
      this.playerCount = update.playerCount.before;
    }
    if (update.rematchRequestCount) {
      this.rematchRequestCount = update.rematchRequestCount.before;
    }
    if (update.requestedRematch) {
      this.requestedRematch = update.requestedRematch.before;
    }
  }

  state: LobbyState = LobbyState.None;
  lobbyId?: LobbyId;
  playerCount = 0;
  rematchRequestCount = 0;
  requestedRematch = false;
}
