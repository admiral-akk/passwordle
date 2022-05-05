import { BaseModal } from './Modal';
export declare class HostingModal extends BaseModal {
    private text;
    private shareLink;
    constructor(modal: HTMLDivElement, copyToClipboard: () => void);
    Enter(): void;
    Exit(): void;
}
