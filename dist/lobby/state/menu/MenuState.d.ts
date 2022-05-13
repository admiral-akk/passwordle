import { LobbyState } from '../../../public/PlayerState';
import { LobbyId } from '../../../structs/LobbyId';
import { LobbyClientSocket } from '../../server/LobbyNetworkTypes';
export declare class MenuState extends LobbyState {
    private lobbyId;
    private modal;
    protected Enter(): void;
    Exit(): Promise<void>;
    protected Register(socket: LobbyClientSocket): void;
    protected Deregister(socket: LobbyClientSocket): void;
    constructor(lobbyId: LobbyId);
    CopyLobbyLinkToClipboard(): void;
    private Matchmake;
    fallbackCopyTextToClipboard(text: string): void;
}
