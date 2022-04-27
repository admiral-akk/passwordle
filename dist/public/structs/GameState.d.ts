import { AnnotatedMove } from './AnnotatedMove';
export declare class GameState {
    moves: AnnotatedMove[];
    playerToMove: string;
    constructor(startingPlayer: string);
    AddMove(move: AnnotatedMove, opponent: string): void;
}
