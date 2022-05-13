import {GameState} from '../../game/model/GameState';
import {
  AddedChar,
  LockedGuess,
  UpdatedAnswerKnowledge,
} from '../../game/network/updates/Updates';
import {GameUpdateEmitter, GameUpdates} from '../../network/GameNetworkTypes';
import {Word} from '../../structs/Word';

export class GameUpdater implements GameUpdates {
  constructor(private state: GameState, private emitter?: GameUpdateEmitter) {}
  AddedChar = (update: AddedChar) => {
    this.state.AddedChar(update);
    this.emitter?.AddedChar(update);
  };
  Deleted = () => {
    this.state.Deleted();
    this.emitter?.Deleted();
  };
  LockedGuess = (update: LockedGuess) => {
    this.state.PlayerLockedGuess(update);
    this.emitter?.LockedGuess(update);
  };
  OpponentAddedChar = () => {
    this.state.OpponentAddedChar();
    this.emitter?.OpponentAddedChar();
  };
  OpponentDeleted = () => {
    this.state.OpponentDeleted();
    this.emitter?.OpponentDeleted();
  };
  OpponentLockedGuess = () => {
    this.state.OpponentLockedGuess();
    this.emitter?.OpponentLockedGuess();
  };
  SetSecret = (secret: Word) => {
    this.state.SetSecret(secret);
    this.emitter?.SetSecret(secret);
  };
  UpdatedAnswerKnowledge = (update: UpdatedAnswerKnowledge) => {
    this.state.UpdatedAnswerKnowledge(update);
    this.emitter?.UpdatedAnswerKnowledge(update);
  };
  OpponentDisconnected = () => {
    this.state.OpponentDisconnected();
    this.emitter?.OpponentDisconnected();
  };
}
