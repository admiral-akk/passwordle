import { CharUpdate } from './CharUpdate';
import { HintUpdate } from './HintUpdate';
export declare class GameView {
    private answer;
    private playerBoard;
    private opponentBoard;
    private keyboard;
    private timer;
    private target;
    private endGame;
    constructor();
    SetSecret(secret: string): void;
    CharUpdate(update: CharUpdate): void;
    HintUpdate(update: HintUpdate): void;
    GameOver(won: boolean): void;
    Reset(): void;
}
