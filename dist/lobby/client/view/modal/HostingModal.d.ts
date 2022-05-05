import { Modal } from './Modal';
export declare class HostingModal extends Modal {
    private text;
    private shareLink;
    constructor(modal: HTMLDivElement, copyToClipboard: () => void);
    Enter(): void;
    Exit(): void;
}
