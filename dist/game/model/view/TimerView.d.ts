import { Subview } from './Subview';
export declare class TimerView extends Subview {
    private time;
    Reset(): void;
    constructor();
    UpdateTime(timeMillis: number): void;
    TimeExhausted(): void;
}
