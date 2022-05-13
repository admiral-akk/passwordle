import { ClientSocket } from '../../public/ClientNetworking';
import { PlayerState } from '../../public/PlayerState';
import { EndGameSummary } from '../../structs/EndGameState';
export declare class LobbyManager extends PlayerState {
    private endState;
    Exit(): Promise<void>;
    private state;
    protected Register(socket: ClientSocket): void;
    protected Deregister(socket: ClientSocket): void;
    constructor(endState?: EndGameSummary | null);
    private SetState;
    protected Enter(): void;
    GameReady(): void;
}
