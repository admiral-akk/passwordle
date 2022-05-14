import { Subview } from '../../Subview';
export declare enum LetterColor {
    White = "white",
    Yellow = "#c9b458",
    Green = "#2e7d32",
    Grey = "grey",
    LightGrey = "lightgrey",
    Red = "crimson"
}
export declare class LetterView extends Subview {
    private color;
    constructor(base: HTMLElement);
    Error(): void;
    SetChar(char: string): void;
    ClearChar(): void;
    Color(): LetterColor;
    SetColor(color: LetterColor): void;
    Reset(): void;
}
