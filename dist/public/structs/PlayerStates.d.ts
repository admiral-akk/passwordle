import { AnnotatedMove } from './AnnotatedMove';
import { GameState } from './GameState';
import { PlayerId } from './PlayerId';
export declare class PlayerStates {
    playerMoves: AnnotatedMove[];
    opponentMoves: AnnotatedMove[];
    constructor(state: GameState, playerId: PlayerId);
}
