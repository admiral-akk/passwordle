import { ClientSocket } from '../../client/ClientNetworking';
import { EndGameSummary } from '../../structs/EndGameState';
export declare class LobbyManager {
    private socket;
    private state?;
    protected Register(socket: ClientSocket): void;
    constructor(socket: ClientSocket);
    private EnterState;
    GameEnded(summary: EndGameSummary): void;
    GameReady(): void;
}
