import { Socket as ServerSocket } from 'socket.io';
import { Socket as ClientSocket } from 'socket.io-client';
import { Word } from '../structs/Word';
import { InterServerEvents, SocketData } from './NetworkTypes';
import { AddedChar, UpdatedAnswerKnowledge } from '../game/network/Updates';
import { PlayerId } from '../structs/PlayerId';
import { EndGameSummary } from '../structs/EndGameState';
export declare type GameClientSocket = ClientSocket<GameUpdates, GameActions>;
export declare type GameServerSocket = ServerSocket<GameActions, GameUpdates, InterServerEvents, SocketData>;
export declare function RegisterGameClient(socket: GameClientSocket, client: GameUpdates): void;
export declare function DeregisterGameClient(socket: GameClientSocket): void;
export declare function RegisterGameServer(socket: GameServerSocket, server: GameActions): void;
export declare function DeregisterGameServer(socket: GameServerSocket): void;
export interface GameUpdates {
    AddedChar: (update: AddedChar) => void;
    Deleted: () => void;
    LockedGuess: () => void;
    OpponentAddedChar: () => void;
    OpponentDeleted: () => void;
    OpponentLockedGuess: () => void;
    SetSecret: (secret: Word) => void;
    UpdatedAnswerKnowledge: (update: UpdatedAnswerKnowledge) => void;
    OpponentDisconnected: (endGameSummary: EndGameSummary) => void;
    RandomGuess: (guess: Word) => void;
}
export declare class GameUpdateEmitter implements GameUpdates {
    private socket;
    constructor(socket: GameServerSocket);
    AddedChar: (update: AddedChar) => boolean;
    Deleted: () => boolean;
    LockedGuess: () => boolean;
    OpponentAddedChar: () => boolean;
    OpponentDeleted: () => boolean;
    OpponentLockedGuess: () => boolean;
    SetSecret: (secret: Word) => boolean;
    UpdatedAnswerKnowledge: (update: UpdatedAnswerKnowledge) => boolean;
    OpponentDisconnected: (endGameSummary: EndGameSummary) => boolean;
    RandomGuess: (update: Word) => boolean;
}
export interface GameActions {
    AddChar: (update: AddedChar, playerId?: PlayerId) => void;
    Delete: (playerId?: PlayerId) => void;
    LockGuess: (playerId?: PlayerId) => void;
    GameClientReady: (playerId?: PlayerId) => void;
}
