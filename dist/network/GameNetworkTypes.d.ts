import { Socket as ServerSocket } from 'socket.io';
import { Socket as ClientSocket } from 'socket.io-client';
import { Word } from '../structs/Word';
import { InterServerEvents, SocketData } from './NetworkTypes';
import { AddedChar, LockedGuess, UpdatedAnswerKnowledge } from '../game/network/Updates';
import { PlayerId } from '../structs/PlayerId';
export declare type GameClientSocket = ClientSocket<GameUpdates, GameActions>;
export declare type GameServerSocket = ServerSocket<GameActions, GameUpdates, InterServerEvents, SocketData>;
export declare function RegisterGameClient(socket: GameClientSocket, client: GameUpdates): void;
export declare function DeregisterGameClient(socket: GameClientSocket): void;
export declare function RegisterGameServer(socket: GameServerSocket, server: GameActions): void;
export declare function DeregisterGameServer(socket: GameServerSocket): void;
export interface GameUpdates {
    AddedChar: (update: AddedChar) => void;
    Deleted: () => void;
    LockedGuess: (update: LockedGuess) => void;
    OpponentAddedChar: () => void;
    OpponentDeleted: () => void;
    OpponentLockedGuess: () => void;
    SetSecret: (secret: Word) => void;
    UpdatedAnswerKnowledge: (update: UpdatedAnswerKnowledge) => void;
    OpponentDisconnected: () => void;
}
export declare class GameUpdateEmitter implements GameUpdates {
    private socket;
    constructor(socket: GameServerSocket);
    AddedChar: (update: AddedChar) => boolean;
    Deleted: () => boolean;
    LockedGuess: (update: LockedGuess) => boolean;
    OpponentAddedChar: () => boolean;
    OpponentDeleted: () => boolean;
    OpponentLockedGuess: () => boolean;
    SetSecret: (secret: Word) => boolean;
    UpdatedAnswerKnowledge: (update: UpdatedAnswerKnowledge) => boolean;
    OpponentDisconnected: () => boolean;
}
export interface GameActions {
    AddedChar: (update: AddedChar, playerId?: PlayerId) => void;
    Deleted: (playerId?: PlayerId) => void;
    LockedGuess: (update: LockedGuess, playerId?: PlayerId) => void;
    GameClientReady: (playerId?: PlayerId) => void;
}
