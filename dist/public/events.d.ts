import { Wordle } from './wordle';
export declare class SubmitWordEvent extends CustomEvent<null> {
    constructor();
}
export declare class DeleteEvent extends CustomEvent<null> {
    constructor();
}
export declare class AddCharEvent extends CustomEvent<string> {
    constructor(char: string);
}
export declare class BoardUpdatedEvent extends CustomEvent<Wordle> {
    constructor(game: Wordle);
}
