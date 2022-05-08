import { Word } from '../structs/Word';
import { GameServerToClientEvents } from '../network/GameNetworkTypes';
import { UpdatedAnswerKnowledge } from '../network/updates/Updates';
import { ClientSocket } from '../../public/ClientNetworking';
import { PlayerState } from '../../public/PlayerState';
export declare class ClientGame implements GameServerToClientEvents {
    private socket;
    protected Register(socket: ClientSocket): void;
    protected Deregister(socket: ClientSocket): void;
    private board;
    constructor(socket: ClientSocket, setState: (nextState: PlayerState) => void, showMenu: () => void);
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
