import { LobbyServerSocket } from './LobbyServerSocket';
export declare class LobbyServer {
    players: LobbyServerSocket[];
    constructor(socket: LobbyServerSocket[]);
    PlayerJoins(player: LobbyServerSocket): void;
    AddPlayer(player: LobbyServerSocket): void;
    Ready(): boolean;
}
