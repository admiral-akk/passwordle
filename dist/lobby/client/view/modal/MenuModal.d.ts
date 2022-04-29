import { Modal } from './Modal';
export declare class MenuModal implements Modal {
    private privateGame;
    private publicGame;
    constructor(modal: HTMLDivElement, hostLobby: () => void, matchmake: () => void);
    Enter(): void;
    Exit(): void;
}
