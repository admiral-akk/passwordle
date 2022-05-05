import { ServerSocket } from './NetworkTypes';
import { PlayerId } from './PlayerId';
export declare class SocketManager {
    private sockets;
    AddSocket(socket: ServerSocket): void;
    GetSockets(players: PlayerId[]): ServerSocket[];
}
