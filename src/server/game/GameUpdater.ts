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
    this.emitter?.AddedChar(update);
  };
  Deleted = () => {
    this.emitter?.Deleted();
  };
  LockedGuess = (update: LockedGuess) => {
    this.emitter?.LockedGuess(update);
  };
  OpponentAddedChar = () => {
    this.emitter?.OpponentAddedChar();
  };
  OpponentDeleted = () => {
    this.emitter?.OpponentDeleted();
  };
  OpponentLockedGuess = () => {
    this.emitter?.OpponentLockedGuess();
  };
  SetSecret = (secret: Word) => {
    this.emitter?.SetSecret(secret);
  };
  UpdatedAnswerKnowledge = (update: UpdatedAnswerKnowledge) => {
    this.emitter?.UpdatedAnswerKnowledge(update);
  };
  OpponentDisconnected = () => {
    this.emitter?.OpponentDisconnected();
  };
}
