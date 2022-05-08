export declare abstract class Modal {
    private elements;
    Exit(): void;
    protected base: HTMLElement;
    constructor();
    protected AddButton(className: string, text: string, callback: () => void): HTMLButtonElement;
    private AddRootDiv;
    protected AddDiv(className: string, text?: string): HTMLDivElement;
}
