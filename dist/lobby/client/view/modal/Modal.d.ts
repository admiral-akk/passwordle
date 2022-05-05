export declare abstract class Modal {
    abstract Enter(): void;
    abstract Exit(): void;
    protected AddButton(parent: HTMLElement, name: string, callback: () => void): HTMLButtonElement;
    protected AddDiv(parent: HTMLElement, text: string): HTMLDivElement;
}
