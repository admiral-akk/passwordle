import { LobbyState } from '../../../public/PlayerState';
import { LobbyId } from '../../LobbyId';
import { LobbyClientSocket } from '../../server/LobbyNetworkTypes';
export declare class FindingMatchState extends LobbyState {
    private modal;
    protected Enter(): void;
    Exit(): Promise<void>;
    protected Register(socket: LobbyClientSocket): void;
    protected Deregister(socket: LobbyClientSocket): void;
    MatchFound(lobbyId: LobbyId): void;
}
