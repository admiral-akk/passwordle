import { GameServerSocket, NewGameClientToServerEvents, NewGameServerToClientEvents } from './GameNetworkTypes';
import { AddedChar, LockedGuess, UpdatedAnswerKnowledge } from './updates/Updates';
import { Word } from '../../game/structs/Word';
export declare class ClientGameMirror implements NewGameClientToServerEvents, NewGameServerToClientEvents {
    private socket;
    private board;
    private otherPlayer;
    private lockedGuessCallback;
    constructor(socket: GameServerSocket);
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
