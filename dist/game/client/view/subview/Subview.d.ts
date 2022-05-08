export declare abstract class Subview {
    protected root: HTMLDivElement;
    private elements;
    private subviews;
    constructor(base: HTMLElement, rootClassName: string, explanationText?: string);
    abstract Reset(): void;
    Exit(): void;
    protected AddSubview(subview: Subview): void;
    protected AddDiv(parent: HTMLElement, className: string): HTMLDivElement;
    private AddExplanation;
}
