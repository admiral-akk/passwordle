export declare abstract class BaseModal {
    abstract Enter(): void;
    abstract Exit(): void;
    constructor();
    protected AddButton(parent: HTMLElement, name: string, callback: () => void): HTMLButtonElement;
    protected AddDiv(parent: HTMLElement, text: string): HTMLDivElement;
}
