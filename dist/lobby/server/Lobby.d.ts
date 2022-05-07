import { EndGameState } from '../../game/client/view/subview/EndGameView';
import { LobbyView } from '../client/view/LobbyView';
import { LobbyClientRequests, LobbyServerRequests } from './LobbyNetworkTypes';
export declare class NewLobby implements LobbyClientRequests {
    private view;
    private server;
    private state;
    constructor(view: LobbyView, server: LobbyServerRequests);
    GameEnded(ending: EndGameState): void;
    MatchFound(lobbyId: string): void;
    EnterGame(): void;
    EnterMenu(lobbyId: string): void;
    FindMatch(): void;
}
