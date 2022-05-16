export declare abstract class Subview {
    protected root: HTMLDivElement;
    private elements;
    private subviews;
    constructor(base: HTMLElement, rootClassName: string, explanationText?: string, longFormExplanationText?: string);
    Reset(): void;
    Exit(): void;
    protected AddSubview(subview: Subview): void;
    protected AddDiv(parent: HTMLElement, className: string): HTMLDivElement;
    protected AddSpan(parent: HTMLElement, className: string, dataIcon?: string): HTMLSpanElement;
    protected AddButton(parent: HTMLElement, className: string, text: string, callback: () => void): HTMLButtonElement;
    private AddExplanation;
    private AddLongExplanation;
}
