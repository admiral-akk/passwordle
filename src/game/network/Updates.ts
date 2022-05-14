import {
  EndGameState,
  EndGameSummary,
  GetEndGameState,
} from '../../structs/EndGameState';
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
    public opponentProgress: TargetProgress
  ) {
    this.endGameState = GenerateSummary(
      playerKnowledge,
      opponentKnowledge,
      playerProgress,
      opponentProgress
    );
  }
}
function GenerateSummary(
  playerKnowledge: WordKnowledge,
  opponentKnowledge: WordKnowledge,
  playerProgress: TargetProgress,
  opponentProgress: TargetProgress
): EndGameSummary | undefined {
  if (!Complete(playerProgress) && !Complete(opponentProgress)) {
    return undefined;
  }
  return new EndGameSummary(
    ToWord(playerKnowledge.guess),
    ToWord(opponentKnowledge.guess),
    playerProgress,
    opponentProgress
  );
}

export function IsGameOver(knowledge: UpdatedAnswerKnowledge): boolean {
  return knowledge.endGameState !== undefined;
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
