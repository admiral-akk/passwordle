import { HintUpdate } from './HintUpdate';
import { EndGameState } from './subview/EndGameView';
export declare class GameView {
    private keyboard;
    private timer;
    private explanation;
    private endGame;
    constructor();
    HintUpdate(update: HintUpdate, updateComplete: () => void): void;
    GameOver(state: EndGameState): void;
    Reset(): void;
    Exit(): void;
    WordTooShort(): void;
    WordNotValid(): void;
}
