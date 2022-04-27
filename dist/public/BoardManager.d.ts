import { PlayerStates } from './structs/PlayerStates';
import { BoardView } from './views/BoardView';
export declare abstract class BoardManager {
    protected boardView: BoardView;
    constructor();
}
export declare class PlayerBoardManager extends BoardManager {
    private currentGuess;
    private guessCount;
    constructor();
    private AddChar;
    private Delete;
    private Submit;
    UpdateGameState(state: PlayerStates): void;
    private RegisterListeners;
}
export declare class OpponentBoardManager extends BoardManager {
    constructor();
    private RegisterListeners;
    UpdateGameState(state: PlayerStates): void;
}
