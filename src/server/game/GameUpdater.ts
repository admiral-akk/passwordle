import {AddedChar, UpdatedAnswerKnowledge} from '../../game/network/Updates';
import {GameUpdates} from '../../network/GameNetworkTypes';
import {Word} from '../../structs/Word';

export class GameUpdater implements GameUpdates {
  constructor(private consumers: GameUpdates[]) {}
  AddedChar = (update: AddedChar) =>
    this.consumers.forEach(consumer => consumer.AddedChar(update));
  Deleted = () => this.consumers.forEach(consumer => consumer.Deleted());
  LockedGuess = () =>
    this.consumers.forEach(consumer => consumer.LockedGuess());
  OpponentAddedChar = () =>
    this.consumers.forEach(consumer => consumer.OpponentAddedChar());
  OpponentDeleted = () =>
    this.consumers.forEach(consumer => consumer.OpponentDeleted());
  OpponentLockedGuess = () =>
    this.consumers.forEach(consumer => consumer.OpponentLockedGuess());
  SetSecret = (secret: Word) =>
    this.consumers.forEach(consumer => consumer.SetSecret(secret));
  UpdatedAnswerKnowledge = (update: UpdatedAnswerKnowledge) =>
    this.consumers.forEach(consumer => consumer.UpdatedAnswerKnowledge(update));
  OpponentDisconnected = () =>
    this.consumers.forEach(consumer => consumer.OpponentDisconnected());
  RandomGuess = (guess: Word) =>
    this.consumers.forEach(consumer => consumer.RandomGuess(guess));
}
