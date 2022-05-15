import { PlayerId } from '../../structs/PlayerId';
import { LobbyId } from '../../structs/LobbyId';
export declare class Lobby {
    players: PlayerId[];
    lobbyId: LobbyId;
    rematchRequested: PlayerId[];
    constructor(players: PlayerId[], lobbyId: LobbyId);
    RequestRematch(playerId: PlayerId): void;
    Opponent(playerId: PlayerId): PlayerId;
}
