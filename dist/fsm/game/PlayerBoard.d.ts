import { AddCharError } from './update/AddCharError';
import { AddCharUpdate } from './update/AddCharUpdate';
import { DeleteError } from './update/DeleteError';
import { DeleteUpdate } from './update/DeleteUpdate';
import { SubmitError } from './update/SubmitError';
import { SubmitUpdate } from './update/SubmitUpdate';
export declare class PlayerBoard {
    private guesses;
    private state;
    private currentGuess;
    AddChar(char: string): AddCharUpdate | AddCharError;
    Submit(): SubmitUpdate | SubmitError;
    Delete(): DeleteUpdate | DeleteError;
    EnableInput(): void;
}
