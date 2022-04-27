import { AnnotatedMove } from '../structs/AnnotatedMove';
export declare class BoardView {
    protected letterBoxes: HTMLDivElement[][];
    constructor(guessCount: number, wordLength: number);
    UpdateWords(annotatedMoves: AnnotatedMove[]): void;
    UpdateGuess(guess: string, guessCount: number): void;
    Clear(): void;
    private UpdateColor;
}
