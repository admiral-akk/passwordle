import { Socket as SSocket } from 'socket.io';
import { Socket as CSocket } from 'socket.io-client';
import { LobbyCommand } from './lobby/LobbyCommand';
export interface CommandUpdates {
    LobbyConfirm(command: LobbyCommand): void;
}
export interface CommandActions {
    LobbyAction(command: LobbyCommand): void;
}
export declare type LobbyClient = CSocket<CommandUpdates, CommandActions>;
export declare type LobbyServer = SSocket<CommandActions, CommandUpdates>;
export declare class LobbyClientWrapper {
    private socket;
    constructor(socket: LobbyClient, callback: (command: LobbyCommand) => void);
    Emit(command: LobbyCommand): void;
}
export declare class LobbyServerWrapper {
    private socket;
    constructor(socket: LobbyServer, callback: (command: LobbyCommand) => void);
    Emit(command: LobbyCommand): void;
}
