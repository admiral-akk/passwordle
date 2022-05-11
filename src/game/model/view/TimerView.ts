import {Subview} from './Subview';

export class TimerView extends Subview {
  private time: HTMLDivElement;
  Reset(): void {
    this.time.innerText = 'No timer.';
  }
  constructor() {
    const base = document.getElementById('timer')!;
    super(base, 'timer', 'Timer');
    this.time = this.AddDiv(base, 'timer');
  }

  UpdateTime(timeMillis: number) {
    this.time.innerText = Math.abs(timeMillis / 1000).toFixed(0) + 's left!';
  }

  TimeExhausted() {
    this.time.innerText = "Time's up!";
  }
}
