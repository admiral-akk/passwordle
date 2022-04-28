import { SocketManager } from '../network/SocketManager';
import { ClientId } from '../struct/ClientId';
export declare const HOST_LOBBY_ENDPOINT_NAME = "/host";
export declare const FIND_MATCH_ENDPOINT_NAME = "/find_match";
export declare function HostLobby(callback: (data: ClientId) => void): void;
export declare function FindMatch(callback: (data: ClientId) => void): void;
export declare class LobbyNetwork {
    private socket;
    constructor(socket: SocketManager);
    HostLobby(callback: (data: ClientId) => void): void;
}
