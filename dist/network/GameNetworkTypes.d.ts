import { Socket as ServerSocket } from 'socket.io';
import { Socket as ClientSocket } from 'socket.io-client';
import { Word } from '../structs/Word';
import { InterServerEvents, SocketData } from './NetworkTypes';
import { AddedChar, LockedGuess, UpdatedAnswerKnowledge } from '../game/network/updates/Updates';
export declare type GameClientSocket = ClientSocket<ToClientGameEvents, ToServerGameEvents>;
export declare type GameServerSocket = ServerSocket<ToServerGameEvents, ToClientGameEvents, InterServerEvents, SocketData>;
export declare function RegisterGameClient(socket: GameClientSocket, client: ToClientGameEvents): void;
export declare function DeregisterGameClient(socket: GameClientSocket): void;
export declare function RegisterGameServer(socket: GameServerSocket, server: ToServerGameEvents): void;
export declare function DeregisterGameServer(socket: GameServerSocket): void;
export interface ToClientGameEvents {
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
export interface ToServerGameEvents {
    AddedChar: (update: AddedChar) => void;
    Deleted: () => void;
    LockedGuess: (update: LockedGuess) => void;
    GameClientReady: () => void;
}
