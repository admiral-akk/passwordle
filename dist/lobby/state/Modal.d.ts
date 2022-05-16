export declare abstract class Modal {
    private elements;
    Exit(): Promise<void>;
    protected container: HTMLElement;
    constructor(containerName: string);
    protected AddButton(className: string, text: string, callback: () => void, parent?: HTMLElement): HTMLButtonElement;
    private AppendChild;
    protected AddDiv(className: string, text?: string, parent?: HTMLElement): HTMLDivElement;
    protected AddParagraph(className: string, text?: string, parent?: HTMLElement): HTMLParagraphElement;
}
