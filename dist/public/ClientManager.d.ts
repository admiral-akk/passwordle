import { LobbyId } from './structs/LobbyId';
import { NewMove } from './structs/Move';
export declare class ClientManager {
    private lobbyId;
    private playerId;
    private state;
    constructor();
    StartLobby(): void;
    JoinLobby(lobbyId: LobbyId): void;
    GetState(): void;
    SubmitMove(move: NewMove): void;
}
