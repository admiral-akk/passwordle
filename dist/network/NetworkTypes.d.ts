import { Socket as SSocket } from 'socket.io';
import { Socket as CSocket } from 'socket.io-client';
import { GameActions, GameUpdates } from './GameNetworkTypes';
import { LobbyUpdates, LobbyActions } from './LobbyNetworkTypes';
import { PlayerId } from '../structs/PlayerId';
export interface Actions extends GameActions, LobbyActions {
}
export interface Updates extends GameUpdates, LobbyUpdates {
}
export interface InterServerEvents {
}
export interface SocketData {
    playerId: PlayerId;
}
export declare type ClientSocket = CSocket<Updates, Actions>;
export declare type ServerSocket = SSocket<Actions, Updates, InterServerEvents, SocketData>;
export declare function RegisterClient(socket: ClientSocket, client: Updates): void;
export declare function DeregisterClient(socket: ClientSocket): void;
export declare function RegisterServer(socket: ServerSocket, server: Actions): void;
export declare function DeregisterServer(socket: ServerSocket): void;
