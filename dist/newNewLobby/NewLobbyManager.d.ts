import { LobbyServerRequests, NewLobbyClientSocket } from './NewLobbyNetworkTypes';
export declare class NewLobbyManager implements LobbyServerRequests {
    private socket;
    private view;
    private model;
    constructor(socket: NewLobbyClientSocket);
    FindMatch(): void;
}
