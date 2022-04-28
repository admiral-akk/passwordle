import { ModalView } from './ModalView';
export declare class LobbyMenuView implements ModalView {
    private privateGame;
    private publicGame;
    constructor(modal: HTMLDivElement, hostLobby: () => void, matchmake: () => void);
    Enter(): void;
    Exit(): void;
}
