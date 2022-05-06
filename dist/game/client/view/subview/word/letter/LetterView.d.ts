import { Subview } from '../../Subview';
export declare enum LetterColor {
    White = "white",
    Yellow = "yellow",
    Green = "forestgreen",
    Grey = "grey",
    LightGrey = "lightgrey",
    Red = "crimson"
}
export declare class LetterView extends Subview {
    constructor(base: HTMLElement);
    SetChar(char: string): void;
    ClearChar(): void;
    SetColor(color: LetterColor): void;
    Reset(): void;
}
