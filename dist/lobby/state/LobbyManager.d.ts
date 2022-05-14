import { ClientSocket } from '../../client/ClientNetworking';
import { LobbyState } from '../../client/PlayerState';
export declare class LobbyManager {
    private socket;
    private state?;
    protected Register(socket: ClientSocket): void;
    constructor(socket: ClientSocket);
    EnterLobby(state: LobbyState): void;
    GameReady(): void;
}
