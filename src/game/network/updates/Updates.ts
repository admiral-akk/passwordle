import {Complete, TargetProgress} from '../../client/structs/TargetProgress';
import {WordKnowledge} from '../../client/structs/WordKnowledge';
import {Word} from '../../structs/Word';

export class AddedChar {
  constructor(public char: string) {}
}

export class Deleted {}

export class UpdatedAnswerKnowledge {
  constructor(
    public playerKnowledge: WordKnowledge,
    public opponentKnowledge: WordKnowledge,
    public playerProgress: TargetProgress,
    public opponentProgress: TargetProgress
  ) {}
}

export class GuessLocked {
  constructor(public index: number) {}
}

export class LockedGuess {
  constructor(public guess: Word) {}
}

export enum ErrorType {
  None,
  TooShort,
  NotValidWord,
}

export class LockedGuessError {
  constructor(
    public type: ErrorType,
    public wordIndex: number,
    public wordLength: number
  ) {}
}

export function Gameover(update: UpdatedAnswerKnowledge): boolean {
  return Complete(update.playerProgress) || Complete(update.opponentProgress);
}

export function Tie(update: UpdatedAnswerKnowledge): boolean {
  return Complete(update.playerProgress) && Complete(update.opponentProgress);
}

export function Win(update: UpdatedAnswerKnowledge): boolean {
  return !Tie(update) && Complete(update.opponentProgress);
}

export function Loss(update: UpdatedAnswerKnowledge): boolean {
  return !Tie(update) && Complete(update.playerProgress);
}
