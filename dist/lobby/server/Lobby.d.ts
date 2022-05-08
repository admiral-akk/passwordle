import { PlayerId } from '../../PlayerId';
import { LobbyId } from '../LobbyId';
export declare class Lobby {
    players: PlayerId[];
    lobbyId: LobbyId;
    constructor(players: PlayerId[], lobbyId: LobbyId);
}
