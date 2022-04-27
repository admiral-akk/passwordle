import { ClientId } from './public/structs/ClientId';
import { LobbyId } from './public/structs/LobbyId';
import { PlayerId } from './public/structs/PlayerId';
export declare class MatchmakingManager {
    private openLobbyIds;
    private lobbyIds;
    constructor();
    private GenerateId;
    private GeneratePlayerId;
    private GenerateLobbyId;
    StartLobby(): ClientId;
    JoinLobby(lobbyId: LobbyId): [ClientId, PlayerId[]];
}
