import { Socket as ServerSocket } from 'socket.io';
import { Socket as ClientSocket } from 'socket.io-client';
import { InterServerEvents, SocketData } from '../../NetworkTypes';
import { AddedChar, OpponentAddedChar } from './updates/Updates';
export declare type GameClientSocket = ClientSocket<NewGameServerToClientEvents, NewGameClientToServerEvents>;
export declare type GameServerSocket = ServerSocket<NewGameClientToServerEvents, NewGameServerToClientEvents, InterServerEvents, SocketData>;
export interface NewGameServerToClientEvents {
    OpponentAddedChar: (update: OpponentAddedChar) => void;
}
export interface NewGameClientToServerEvents {
    AddedChar: (update: AddedChar) => void;
}
