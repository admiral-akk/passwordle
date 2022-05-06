export declare abstract class BaseModal {
    private elementsAdded;
    Enter(): void;
    Exit(): void;
    protected AddButton(parent: HTMLElement, className: string, name: string, callback: () => void): HTMLButtonElement;
    protected AddDiv(parent: HTMLElement, text: string, className?: string): HTMLDivElement;
}
