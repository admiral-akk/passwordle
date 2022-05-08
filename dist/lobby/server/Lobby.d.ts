import { EndGameState } from '../../game/client/view/subview/EndGameView';
import { LobbyView } from '../client/view/LobbyView';
import { LobbyId } from '../LobbyId';
import { LobbyClientRequests, LobbyServerRequests } from './LobbyNetworkTypes';
export declare class Lobby implements LobbyClientRequests {
    private view;
    private server;
    private state;
    constructor(view: LobbyView, server: LobbyServerRequests);
    Exit(): void;
    FindingMatch(): void;
    GameEnded(ending: EndGameState): void;
    MatchFound(lobbyId: LobbyId): void;
    EnterMenu(lobbyId: LobbyId): void;
}
