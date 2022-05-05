import { LobbyView } from '../../lobby/client/view/LobbyView';
import { NewLobbyClientToServerEvents, NewLobbyServerToClientEvents } from '../network/LobbyNetworkTypes';
export declare class Lobby implements NewLobbyClientToServerEvents, NewLobbyServerToClientEvents {
    private view;
    private startMatchmakingCallback;
    private state;
    lobbyId: string;
    constructor(view?: LobbyView | null, startMatchmakingCallback?: () => void);
    StartingGame(): void;
    RequestMainMenu(): void;
    LobbyCreated(lobbyId: string): void;
    MatchFound(lobbyId: string): void;
    StartGame(): void;
    StartMatchmaking(): void;
    ReturnToMainMenu(): void;
}
