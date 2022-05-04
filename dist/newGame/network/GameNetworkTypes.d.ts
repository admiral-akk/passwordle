import { Socket as ServerSocket } from 'socket.io';
import { Socket as ClientSocket } from 'socket.io-client';
import { InterServerEvents, SocketData } from '../../NetworkTypes';
import { AddedChar, UpdatedAnswerKnowledge } from './updates/Updates';
export declare type GameClientSocket = ClientSocket<NewGameServerToClientEvents, NewGameClientToServerEvents>;
export declare type GameServerSocket = ServerSocket<NewGameClientToServerEvents, NewGameServerToClientEvents, InterServerEvents, SocketData>;
export interface NewGameServerToClientEvents {
    OpponentAddedChar: () => void;
    UpdatedAnswerKnowledge: (update: UpdatedAnswerKnowledge) => void;
}
export interface NewGameClientToServerEvents {
    AddedChar: (update: AddedChar) => void;
}
