/// <reference types="express-serve-static-core" />
import { PlayerId } from '../structs/PlayerId';
export declare class GlobalServer {
    private server;
    private playerSockets;
    private lobbyServer;
    private gameServer;
    EnterGame(players: PlayerId[]): void;
    private PlayerConnected;
    private PlayerDisconnected;
    constructor(app: Express.Application);
}
