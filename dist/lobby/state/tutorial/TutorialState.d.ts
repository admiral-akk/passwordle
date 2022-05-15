import { LobbyClientSocket } from '../../../network/LobbyNetworkTypes';
import { LobbyState } from '../LobbyState';
export declare class TutorialState extends LobbyState {
    private modal;
    protected Enter(): void;
    Exit(): Promise<void>;
    protected Register(socket: LobbyClientSocket): void;
    protected Deregister(socket: LobbyClientSocket): void;
}
