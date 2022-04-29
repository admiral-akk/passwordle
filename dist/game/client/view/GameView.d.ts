import { CharUpdate } from './CharUpdate';
export declare class GameView {
    private answer;
    private playerBoard;
    private opponentBoard;
    private keyboard;
    private timer;
    private target;
    constructor();
    SetSecret(secret: string): void;
    Update(update: CharUpdate): void;
}
