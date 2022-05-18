import { ModelState } from './ModelState';
import { TimerView } from './view/TimerView';
export declare class TimerState extends ModelState<TimerView> {
    private timeExhausted?;
    private state;
    private timeLeft;
    private timeout?;
    private lastUpdate;
    constructor(view?: TimerView, timeExhausted?: (() => void) | undefined);
    Exit(): void;
    Reset(): void;
    Stop(): void;
    LockedGuess(): void;
    OpponentSubmitted(): void;
    UpdateKnowledge(): void;
    private ResetTimer;
    private StartTimer;
    private TimeExhausted;
    private UpdateTimer;
    private SetState;
}
