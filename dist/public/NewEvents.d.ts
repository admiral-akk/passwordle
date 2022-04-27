import { PlayerStates } from './structs/PlayerStates';
export declare class SubmitCommand extends CustomEvent<null> {
    constructor();
}
export declare class DeleteCommand extends CustomEvent<null> {
    constructor();
}
export declare class AddCharCommand extends CustomEvent<string> {
    constructor(char: string);
}
export declare class SubmitGuessEvent extends CustomEvent<string> {
    constructor(guess: string);
}
export declare class PlayerToMoveEvent extends CustomEvent<null> {
    constructor();
}
export declare class GameStateEvent extends CustomEvent<PlayerStates> {
    constructor(state: PlayerStates);
}
