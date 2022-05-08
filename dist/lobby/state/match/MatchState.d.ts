import { LobbyState } from '../../../public/PlayerState';
import { LobbyId } from '../../LobbyId';
import { LobbyClientSocket } from '../../server/LobbyNetworkTypes';
export declare class MatchState extends LobbyState {
    private lobbyId;
    private modal;
    protected Enter(): void;
    Exit(): void;
    protected Register(socket: LobbyClientSocket): void;
    protected Deregister(socket: LobbyClientSocket): void;
    constructor(lobbyId: LobbyId);
}
