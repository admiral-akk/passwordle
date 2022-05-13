import {Complete, TargetProgress} from './TargetProgress';
import {Word} from './Word';

export enum EndGameState {
  None,
  Win,
  Loss,
  Tie,
}

export class EndGameSummary {
  constructor(
    public yourPassword: Word,
    public opponentPassword: Word,
    public yourProgress: TargetProgress,
    public opponentProgress: TargetProgress
  ) {}
}

export function GetEndGameState(summary: EndGameSummary): EndGameState {
  const playerComplete = Complete(summary.yourProgress);
  const opponentComplete = Complete(summary.opponentProgress);
  if (playerComplete === opponentComplete) {
    return EndGameState.Tie;
  }
  if (playerComplete) {
    return EndGameState.Win;
  }
  return EndGameState.Loss;
}
