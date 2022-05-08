import { LobbyServerRequests } from '../server/LobbyNetworkTypes';
import { PlayerState } from '../../public/Player';
import { ClientSocket } from '../../public/ClientNetworking';
export declare class NewLobbyManager implements LobbyServerRequests {
    private socket;
    protected Register(socket: ClientSocket): void;
    protected Deregister(socket: ClientSocket): void;
    private view;
    private model;
    constructor(socket: ClientSocket, setState: (nextState: PlayerState) => void);
    JoinLobby(lobbyId: string): void;
    FindMatch(): void;
    ShowMenu(): void;
}
