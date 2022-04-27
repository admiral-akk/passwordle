import { LobbyId } from '../public/structs/LobbyId';
import { PlayerId } from '../public/structs/PlayerId';
export declare class LobbyState {
    lobbyId: LobbyId;
    players: PlayerId[];
    constructor(lobbyId: LobbyId);
    AddPlayer(playerId: PlayerId): void;
}
