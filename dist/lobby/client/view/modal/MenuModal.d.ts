import { BaseModal } from './Modal';
export declare class MenuModal extends BaseModal {
    private privateGame;
    private publicGame;
    constructor(modal: HTMLDivElement, hostLobby: () => void, matchmake: () => void);
    Enter(): void;
    Exit(): void;
}
