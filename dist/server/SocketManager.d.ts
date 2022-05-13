import { ServerSocket } from '../network/NetworkTypes';
import { PlayerId } from '../structs/PlayerId';
export declare class SocketManager {
    private sockets;
    AddSocket(socket: ServerSocket): void;
    GetSockets(players: PlayerId[]): ServerSocket[];
}
