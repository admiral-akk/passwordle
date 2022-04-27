import { LobbyId } from './structs/LobbyId';
export declare class ClientManager {
    private lobbyId;
    private playerId;
    private state;
    constructor();
    StartLobby(): void;
    JoinLobby(lobbyId: LobbyId): void;
    GetState(): void;
    SubmitMove(guess: string): void;
}
