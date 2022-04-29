import { LobbySocket } from './LobbyNetworkEvents';
export declare class LobbyManager {
    private view;
    private clientId;
    private socket;
    constructor(socket: LobbySocket);
    private HostingLobby;
    private FindingMatch;
    private LobbyReady;
    private SetState;
}
