import { CharUpdate } from './CharUpdate';
import { HintUpdate } from './HintUpdate';
import { OpponentUpdate } from './OpponentUpdate';
import { EndGameState } from './subview/EndGameView';
import { LockedGuessError } from '../../network/updates/Updates';
export declare class GameView {
    private yourBoard;
    private yourPassword;
    private opponentBoard;
    private opponentPassword;
    private keyboard;
    private timer;
    private explanation;
    private endGame;
    constructor();
    SetSecret(secret: string): void;
    CharUpdate(update: CharUpdate): void;
    HintUpdate(update: HintUpdate, updateComplete: () => void): void;
    GameOver(state: EndGameState): void;
    Reset(): void;
    Exit(): void;
    OpponentUpdate(update: OpponentUpdate): void;
    LockedGuessError(error: LockedGuessError): void;
    WordTooShort(): void;
    WordNotValid(): void;
}
