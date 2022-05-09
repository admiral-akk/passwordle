import { Word } from '../structs/Word';
import { GameServerToClientEvents } from '../network/GameNetworkTypes';
import { UpdatedAnswerKnowledge } from '../network/updates/Updates';
import { ClientSocket } from '../../public/ClientNetworking';
import { PlayerState } from '../../public/PlayerState';
export declare class ClientGame extends PlayerState implements GameServerToClientEvents {
    Exit(): Promise<void>;
    protected Enter(): void;
    protected Register(socket: ClientSocket): void;
    protected Deregister(socket: ClientSocket): void;
    private board;
    constructor();
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
