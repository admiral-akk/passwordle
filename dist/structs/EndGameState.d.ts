import { TargetProgress } from './TargetProgress';
import { Word } from './Word';
export declare enum EndGameState {
    None = 0,
    Win = 1,
    Loss = 2,
    Tie = 3
}
export declare class EndGameSummary {
    yourPassword: Word;
    opponentPassword: Word;
    yourProgress: TargetProgress;
    opponentProgress: TargetProgress;
    constructor(yourPassword: Word, opponentPassword: Word, yourProgress: TargetProgress, opponentProgress: TargetProgress);
}
export declare function GetEndGameState(summary: EndGameSummary): EndGameState;
