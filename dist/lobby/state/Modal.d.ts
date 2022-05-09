export declare abstract class Modal {
    private elements;
    private popup;
    Exit(): Promise<void>;
    protected base: HTMLElement;
    constructor();
    protected AddButton(className: string, text: string, callback: () => void): HTMLButtonElement;
    private AddRootDiv;
    protected AddDiv(className: string, text?: string): HTMLDivElement;
    protected AddPopup(target: HTMLElement, text: string, durationSeconds?: number): void;
}
