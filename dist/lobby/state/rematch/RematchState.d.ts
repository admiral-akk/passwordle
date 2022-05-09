import { LobbyState } from '../../../public/PlayerState';
import { LobbyId } from '../../LobbyId';
import { LobbyClientSocket } from '../../server/LobbyNetworkTypes';
export declare class RematchState extends LobbyState {
    private modal;
    protected Enter(): void;
    Exit(): void;
    protected Register(socket: LobbyClientSocket): void;
    protected Deregister(socket: LobbyClientSocket): void;
    constructor();
    private RequestRematch;
    private ReturnToMenu;
    MatchFound(lobbyId: LobbyId): void;
    EnterMenu(lobbyId: LobbyId): void;
}