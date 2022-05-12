import { Subview } from './Subview';
export declare class TimerView extends Subview {
    private time;
    private currentTime;
    Reset(): void;
    constructor(base: HTMLElement);
    StartTimer(timeMillis: number): void;
    UpdateTime(timeMillis: number): void;
    TimeExhausted(): void;
}
