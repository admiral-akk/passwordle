import { LobbyState } from '../LobbyState';
import { EndGameSummary } from '../../../structs/EndGameState';
import { LobbyId } from '../../../structs/LobbyId';
import { LobbyClientSocket } from '../../../network/LobbyNetworkTypes';
export declare class RematchState extends LobbyState {
    private endState;
    protected Enter(): void;
    Exit(): Promise<void>;
    private state;
    protected Register(socket: LobbyClientSocket): void;
    protected Deregister(socket: LobbyClientSocket): void;
    constructor(endState: EndGameSummary);
    private modal;
    private RequestRematch;
    private ReturnToMenu;
    EnterMenu(lobbyId: LobbyId): void;
}
