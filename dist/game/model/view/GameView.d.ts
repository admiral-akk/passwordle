import { KeyboardView } from './KeyboardView';
import { OpponentBoardView } from './OpponentBoardView';
import { OpponentPasswordView } from './OpponentPasswordView';
import { Subview } from './Subview';
import { TimerView } from './TimerView';
import { YourBoardView } from './YourBoardView';
import { YourPasswordView } from './YourPasswordView';
export declare class GameView extends Subview {
    constructor(base: HTMLElement, className?: string);
    private gameboard;
    timer: TimerView;
    yourPassword: YourPasswordView;
    opponentPassword: OpponentPasswordView;
    private playArea;
    yourBoard: YourBoardView;
    opponentBoard: OpponentBoardView;
    keyboard: KeyboardView;
}
