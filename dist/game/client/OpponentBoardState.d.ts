import { BoardState } from '../model/BoardState';
export declare class OpponentBoardState extends BoardState {
    private view;
    OpponentAddedChar(): void;
    OpponentDeleted(): void;
    OpponentLockedGuess(): void;
}
