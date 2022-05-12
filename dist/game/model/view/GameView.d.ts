import { KeyboardView } from './KeyboardView';
import { OpponentBoardView } from './OpponentBoardView';
import { OpponentPasswordView } from './OpponentPasswordView';
import { Subview } from './Subview';
import { TimerView } from './TimerView';
import { YourBoardView } from './YourBoardView';
import { YourPasswordView } from './YourPasswordView';
export declare class GameView extends Subview {
    private base;
    constructor(base: HTMLElement);
    timer: TimerView;
    yourPassword: YourPasswordView;
    opponentPassword: OpponentPasswordView;
    private playArea;
    yourBoard: YourBoardView;
    opponentBoard: OpponentBoardView;
    keyboard: KeyboardView;
}
