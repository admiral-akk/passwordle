import {TargetProgress} from './TargetProgress';
import {Word} from './Word';

export enum EndGameState {
  None,
  Win,
  Loss,
  Tie,
  Disconnected,
}

export class EndGameSummary {
  constructor(
    public yourPassword: Word,
    public opponentPassword: Word,
    public yourProgress: TargetProgress,
    public opponentProgress: TargetProgress,
    public endState: EndGameState
  ) {}
}
