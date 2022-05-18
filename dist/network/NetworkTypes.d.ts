import { Socket as SSocket } from 'socket.io';
import { Socket as CSocket } from 'socket.io-client';
import { GameActions, GameUpdates } from './GameNetworkTypes';
import { LobbyUpdates, LobbyActions } from './LobbyNetworkTypes';
import { PlayerId } from '../structs/PlayerId';
import { CommandActions, CommandUpdates } from '../new/CommandNetwork';
export default interface Actions extends GameActions, LobbyActions, CommandActions {
}
export interface Updates extends GameUpdates, LobbyUpdates, CommandUpdates {
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
