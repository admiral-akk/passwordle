import { CharUpdate } from './CharUpdate';
import { HintUpdate } from './HintUpdate';
export declare class GameView {
    private answer;
    private playerBoard;
    private opponentBoard;
    private keyboard;
    private timer;
    private target;
    constructor();
    SetSecret(secret: string): void;
    CharUpdate(update: CharUpdate): void;
    HintUpdate(update: HintUpdate): void;
}
