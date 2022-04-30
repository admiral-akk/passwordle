import { LobbyServerSocket } from './LobbyServerSocket';
export declare class LobbyServer {
    id: string;
    players: LobbyServerSocket[];
    ready: boolean[];
    constructor(socket: LobbyServerSocket);
    PlayerJoins(player: LobbyServerSocket): void;
    AddPlayer(player: LobbyServerSocket): void;
}
