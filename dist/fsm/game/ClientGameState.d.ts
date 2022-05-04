import { PlayerId } from '../../PlayerId';
import { PlayerBoard } from './PlayerBoard';
import { AddCharError } from './update/AddCharError';
import { AddCharUpdate } from './update/AddCharUpdate';
import { DeleteError } from './update/DeleteError';
import { DeleteUpdate } from './update/DeleteUpdate';
import { SubmitError } from './update/SubmitError';
import { SubmitUpdate } from './update/SubmitUpdate';
export declare class ClientGameState {
    private playerId;
    playerBoard: PlayerBoard;
    opponentBoard: PlayerBoard;
    private addCharCallback;
    private deleteCallback;
    private submitCallback;
    private state;
    constructor(playerId: PlayerId, playerBoard: PlayerBoard, opponentBoard: PlayerBoard, addCharCallback: (update: AddCharUpdate) => void, deleteCallback: (update: DeleteUpdate) => void, submitCallback: (update: SubmitUpdate) => void);
    OpponentUpdate(update: AddCharUpdate | SubmitUpdate | DeleteUpdate): void;
    ServerUpdate(): void;
    AddChar(char: string): null | AddCharError;
    Delete(): null | DeleteError;
    Submit(): null | SubmitError;
}
