import {
  EndGameState,
  EndGameSummary,
  GetEndGameState,
} from '../../../structs/EndGameState';
import {TargetProgress} from '../../../structs/TargetProgress';
import {Word} from '../../../structs/Word';
import {WordKnowledge} from '../../../structs/WordKnowledge';

export class AddedChar {
  constructor(public char: string) {}
}

export class Deleted {}

export class UpdatedAnswerKnowledge {
  constructor(
    public playerKnowledge: WordKnowledge,
    public opponentKnowledge: WordKnowledge,
    public playerProgress: TargetProgress,
    public opponentProgress: TargetProgress,
    public endGameState: EndGameSummary | null
  ) {}
}

export function IsGameOver(knowledge: UpdatedAnswerKnowledge): boolean {
  return knowledge.endGameState !== null;
}

export function GameOverState(knowledge: UpdatedAnswerKnowledge): EndGameState {
  return GetEndGameState(knowledge.endGameState!);
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
