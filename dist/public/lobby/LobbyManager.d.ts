import { SocketManager } from '../network/SocketManager';
export declare class LobbyManager {
    private view;
    private clientId;
    private socket;
    constructor(socket: SocketManager);
    private HostingLobby;
    private FindingMatch;
    private SetState;
}
