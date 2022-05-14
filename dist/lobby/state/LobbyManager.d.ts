import { ClientSocket } from '../../client/ClientNetworking';
export declare class LobbyManager {
    private socket;
    private state?;
    protected Register(socket: ClientSocket): void;
    protected Deregister(socket: ClientSocket): void;
    constructor(socket: ClientSocket);
    private SetState;
    GameReady(): void;
}
