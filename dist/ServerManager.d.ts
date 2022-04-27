import { ClientId } from './public/structs/ClientId';
import { GameState } from './public/structs/GameState';
import { LobbyId } from './public/structs/LobbyId';
import { NewMove } from './public/structs/Move';
import { PlayerId } from './public/structs/PlayerId';
export declare class ServerManager {
    private matchmaking;
    private activeGames;
    constructor();
    StartLobby(): ClientId;
    JoinLobby(lobbyId: LobbyId): ClientId;
    GetState(lobbyId: LobbyId, player: PlayerId): GameState;
    SubmitMove(lobbyId: string, move: NewMove): void;
}
