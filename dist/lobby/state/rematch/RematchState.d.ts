import { GameOverState } from '../../../game/model/PlayerBoard';
import { LobbyState } from '../../../public/PlayerState';
import { LobbyId } from '../../LobbyId';
import { LobbyClientSocket } from '../../server/LobbyNetworkTypes';
export declare class RematchState extends LobbyState {
    private endState;
    protected Enter(): void;
    Exit(): Promise<void>;
    private state;
    protected Register(socket: LobbyClientSocket): void;
    protected Deregister(socket: LobbyClientSocket): void;
    constructor(endState: GameOverState);
    private modal;
    private RequestRematch;
    private ReturnToMenu;
    EnterMenu(lobbyId: LobbyId): void;
}
