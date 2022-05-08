import { LobbyClientRequests, LobbyServerRequests } from '../server/LobbyNetworkTypes';
import { EndGameState } from '../../game/client/view/subview/EndGameView';
import { ClientSocket } from '../../public/ClientNetworking';
import { PlayerState } from '../../public/PlayerState';
export declare class NewLobbyManager extends PlayerState implements LobbyServerRequests, LobbyClientRequests {
    protected Register(socket: ClientSocket): void;
    protected Deregister(socket: ClientSocket): void;
    private view;
    private model;
    constructor();
    EnterMenu(lobbyId: string): void;
    MatchFound(lobbyId: string): void;
    GameEnded(ending: EndGameState): void;
    JoinLobby(lobbyId: string): void;
    FindMatch(): void;
    ShowMenu(): void;
}
