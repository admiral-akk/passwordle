import { CharUpdate } from './CharUpdate';
import { HintUpdate } from './HintUpdate';
import { OpponentUpdate } from './OpponentUpdate';
import { EndGameState } from './subview/EndGameView';
export declare class GameView {
    private yourBoard;
    private yourPassword;
    private opponentBoard;
    private opponentPassword;
    private keyboard;
    private timer;
    private endGame;
    constructor();
    SetSecret(secret: string): void;
    CharUpdate(update: CharUpdate): void;
    HintUpdate(update: HintUpdate, updateComplete: () => void): void;
    GameOver(state: EndGameState): void;
    Reset(): void;
    OpponentUpdate(update: OpponentUpdate): void;
}
