import { LobbySocket } from './LobbyNetworkEvents';
export declare class LobbyManager {
    private view;
    private lobbyId;
    private socket;
    constructor(socket: LobbySocket);
    private HostingLobby;
    private FindingMatch;
    private LobbyReady;
    private SetState;
}
