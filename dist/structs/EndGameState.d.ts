import { TargetProgress } from './TargetProgress';
import { Word } from './Word';
export declare enum EndGameState {
    None = 0,
    Win = 1,
    Loss = 2,
    Tie = 3,
    Disconnected = 4
}
export declare class EndGameSummary {
    yourPassword: Word;
    opponentPassword: Word;
    yourProgress: TargetProgress;
    opponentProgress: TargetProgress;
    endState: EndGameState;
    constructor(yourPassword: Word, opponentPassword: Word, yourProgress: TargetProgress, opponentProgress: TargetProgress, endState: EndGameState);
}
