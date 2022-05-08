import { LobbyState } from '../../../public/PlayerState';
import { LobbyId } from '../../LobbyId';
import { LobbyClientSocket } from '../../server/LobbyNetworkTypes';
export declare class LoadingState extends LobbyState {
    private modal;
    protected Enter(): void;
    Exit(): void;
    protected Register(socket: LobbyClientSocket): void;
    protected Deregister(socket: LobbyClientSocket): void;
    constructor(socket: LobbyClientSocket, setState: (nextState: LobbyState) => void);
    EnterMenu(lobbyId: LobbyId): void;
    MatchFound(lobbyId: LobbyId): void;
    RequestLobbyId(): void;
    JoinLobby(lobbyId: LobbyId): void;
}
