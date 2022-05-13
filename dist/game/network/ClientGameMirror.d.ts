import { GameServerSocket, GameClientToServerEvents, GameServerToClientEvents } from './GameNetworkTypes';
import { AddedChar, LockedGuess, UpdatedAnswerKnowledge } from './updates/Updates';
import { Word } from '../../structs/Word';
export declare class ClientGameMirror implements GameClientToServerEvents, GameServerToClientEvents {
    private socket;
    private secret;
    private board;
    private otherPlayer;
    private lockedGuessCallback;
    constructor(socket: GameServerSocket);
    GameClientReady(): void;
    OpponentDisconnected(): void;
    SetSecret(secret: Word): void;
    OpponentLockedGuess(): void;
    LockedGuess(update: LockedGuess): void;
    RegisterOtherPlayer(otherPlayer: ClientGameMirror): void;
    RegisterLockedGuess(callback: (update: LockedGuess) => void): void;
    Deleted(): void;
    AddedChar(update: AddedChar): void;
    OpponentDeleted(): void;
    OpponentAddedChar(): void;
    UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge): void;
}
