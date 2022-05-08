import { Modal } from '../state/Modal';
export declare abstract class LobbyView {
    private elements;
    private modal;
    constructor();
    abstract Modal(): Modal;
    Enter(): void;
    Exit(): void;
    private AddDiv;
}
