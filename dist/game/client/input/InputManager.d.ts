export declare class InputManager {
    private addChar;
    private deleteChar;
    private submitWord;
    constructor(addChar: (char: string) => void, deleteChar: () => void, submitWord: () => void);
    private registerKeyboardEvents;
}
