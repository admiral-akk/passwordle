import { PlayerId } from '../../PlayerId';
import { LobbyId } from '../LobbyId';
export declare class Lobby {
    players: PlayerId[];
    lobbyId: LobbyId;
    rematchRequested: PlayerId[];
    constructor(players: PlayerId[], lobbyId: LobbyId);
    RequestRematch(playerId: PlayerId): void;
}
