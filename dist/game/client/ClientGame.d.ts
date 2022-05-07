import { Word } from '../structs/Word';
import { GameClientSocket, GameServerToClientEvents } from '../network/GameNetworkTypes';
import { UpdatedAnswerKnowledge } from '../network/updates/Updates';
import { ExitState, PlayerState } from '../../public/Player';
export declare class ClientGame implements GameServerToClientEvents, PlayerState {
    private socket;
    private board;
    constructor(socket: GameClientSocket, showMenu: () => void);
    Enter(prevState: ExitState): void;
    Exit(): ExitState;
    OpponentDisconnected(): void;
    SetSecret(secret: Word): void;
    OpponentLockedGuess(): void;
    OpponentDeleted(): void;
    OpponentAddedChar(): void;
    UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge): void;
    AddChar(char: string): void;
    Delete(): void;
    Submit(): void;
}
