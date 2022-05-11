import { LobbyState } from '../../../public/PlayerState';
import { EndGameSummary } from '../../../util/struct/EndGameState';
import { LobbyId } from '../../LobbyId';
import { LobbyClientSocket } from '../../server/LobbyNetworkTypes';
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
