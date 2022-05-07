import { LobbyServerRequests, LobbyClientSocket } from '../server/LobbyNetworkTypes';
import { ExitState, PlayerState } from '../../public/Player';
export declare class NewLobbyManager implements LobbyServerRequests, PlayerState {
    private socket;
    private view;
    private model;
    constructor(socket: LobbyClientSocket);
    Enter(prevState: ExitState): void;
    Exit(): ExitState;
    JoinLobby(lobbyId: string): void;
    FindMatch(): void;
    ShowMenu(): void;
}
