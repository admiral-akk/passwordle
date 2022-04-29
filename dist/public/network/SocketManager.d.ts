import { Socket } from 'socket.io-client';
import { ServerToClientEvents, ClientToServerEvents } from './NetworkTypes';
export declare class SocketManager {
    socket: Socket<ServerToClientEvents, ClientToServerEvents>;
    constructor();
    RequestPublicLobby(): void;
    RequestPrivateLobby(): void;
    RegisterGetPrivateLobbyId(callback: (lobbyId: string) => void): void;
    RegisterGetPublicLobbyId(callback: () => void): void;
}
