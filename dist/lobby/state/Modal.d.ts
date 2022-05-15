export declare abstract class Modal {
    private elements;
    private popup;
    Exit(): Promise<void>;
    protected base: HTMLElement;
    constructor();
    protected AddButton(base: HTMLElement | undefined, className: string, text: string, callback: () => void): HTMLButtonElement;
    protected AddRootDiv(root: HTMLElement, className: string, text?: string): HTMLDivElement;
    protected AddImage(src: string, className: string, target?: HTMLElement): HTMLImageElement;
    protected AddDiv(className: string, text?: string): HTMLDivElement;
    protected AddPopup(target: HTMLElement, text: string, durationSeconds?: number): void;
}
