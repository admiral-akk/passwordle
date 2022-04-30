import { LobbyServerSocket } from './LobbyServerSocket';
export declare class Lobby {
    id: string;
    players: LobbyServerSocket[];
    constructor(socket: LobbyServerSocket);
    AddPlayer(player: LobbyServerSocket): void;
}
