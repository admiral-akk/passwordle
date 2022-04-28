import { Socket } from "socket.io";
import { ClientToServerEvents, ServerToClientEvents } from "./public/network/NetworkTypes";
import { InterServerEvents, SocketData } from './ServerNetworkTypes';
export declare class ServerSocket {
    private socket;
    constructor(socket: Socket<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>);
}
