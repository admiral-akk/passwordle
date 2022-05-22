import {EndGameState, EndGameSummary} from '../../structs/EndGameState';
import {Complete, TargetProgress} from '../../structs/TargetProgress';
import {ToWord, Word} from '../../structs/Word';
import {WordKnowledge} from '../../structs/WordKnowledge';

export class AddedChar {
  constructor(public char: string) {}
}

export class Deleted {}

export class UpdatedAnswerKnowledge {
  public endGameState?: EndGameSummary;
  constructor(
    public playerKnowledge: WordKnowledge,
    public opponentKnowledge: WordKnowledge,
    public playerProgress: TargetProgress,
    public opponentProgress: TargetProgress,
    playerPassword: Word,
    opponentPassword: Word,
    guessCount: number
  ) {
    this.endGameState = GenerateSummary(
      playerKnowledge,
      opponentKnowledge,
      playerProgress,
      opponentProgress,
      playerPassword,
      opponentPassword,
      guessCount
    );
  }
}
function GenerateSummary(
  playerKnowledge: WordKnowledge,
  opponentKnowledge: WordKnowledge,
  playerProgress: TargetProgress,
  opponentProgress: TargetProgress,
  playerPassword: Word,
  opponentPassword: Word,
  guessCount: number
): EndGameSummary | undefined {
  if (
    !Complete(playerProgress) &&
    !Complete(opponentProgress) &&
    guessCount < 6
  ) {
    return undefined;
  }
  let endState = EndGameState.Tie;
  if (Complete(playerProgress) && !Complete(opponentProgress)) {
    endState = EndGameState.Loss;
  }
  if (!Complete(playerProgress) && Complete(opponentProgress)) {
    endState = EndGameState.Win;
  }
  return new EndGameSummary(
    playerPassword,
    opponentPassword,
    playerProgress,
    opponentProgress,
    endState
  );
}

export function IsGameOver(knowledge: UpdatedAnswerKnowledge): boolean {
  return knowledge.endGameState !== undefined;
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
