import { ModelState } from './ModelState';
import { TimerView } from './view/TimerView';
export declare class TimerState extends ModelState<TimerView> {
    private state;
    private timeLeft;
    private timeout;
    private lastUpdate;
    constructor(hasView: boolean);
    Exit(): void;
    Reset(): void;
    LockedGuess(): void;
    OpponentSubmitted(): void;
    UpdateKnowledge(): void;
    private ResetTimer;
    private StartTimer;
    private TimeExhausted;
    private UpdateTimer;
    private SetState;
}
