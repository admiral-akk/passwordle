import { ClientId } from './public/structs/ClientId';
import { GameState } from './public/structs/GameState';
import { LobbyId } from './public/structs/LobbyId';
import { NewMove } from './public/structs/Move';
export declare class ServerManager {
    private matchmaking;
    private activeGames;
    constructor();
    StartLobby(): ClientId;
    JoinLobby(lobbyId: LobbyId): ClientId;
    GetState(lobbyId: string, player: string): GameState;
    SubmitMove(lobbyId: string, move: NewMove): void;
}
export declare enum PlayerActions {
    JoinLobby = 0,
    StartLobby = 1,
    EnterGuess = 2,
    DeleteChar = 3,
    AddChar = 4,
    CopyLobbyLink = 5
}
export declare enum GameActions {
    SendState = 0,
    SendGameId = 1,
    SendResults = 2,
    RequestState = 3
}
