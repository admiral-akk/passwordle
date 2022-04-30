export declare abstract class Subview {
    protected root: HTMLDivElement;
    constructor(base: HTMLElement, rootClassName: string, explanationText?: string);
}
export declare class ExplanationView {
    private root;
    constructor(base: HTMLElement, text?: string);
}
