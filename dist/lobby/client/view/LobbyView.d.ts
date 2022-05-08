import { EndGameState } from '../../../game/EndGameState';
export declare class LobbyView {
    private root;
    private background;
    private modal;
    private currentModal;
    constructor();
    private SetModal;
    Loading(): void;
    GameEnded(ending: EndGameState): void;
    Menu(hostLobby: () => void, matchmake: () => void): void;
    FindingMatch(): void;
    LobbyReady(): void;
    Exit(): void;
}
