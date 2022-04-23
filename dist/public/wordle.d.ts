export declare class Wordle {
    guesses: string[];
    currentGuess: string;
    private _answer;
    constructor();
    AddChar(c: string): void;
    Delete(): void;
    Submit(): void;
    WordLength(): number;
    TotalGuesses(): number;
}
