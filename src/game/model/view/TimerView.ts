import {AnimateCSS, AnimationType} from './Animate';
import {Subview} from './Subview';

export class TimerView extends Subview {
  private time: HTMLDivElement;
  private currentTime = 0;

  Reset(): void {
    this.time.innerText = '';
    this.currentTime = 0;
  }
  constructor(base: HTMLElement) {
    super(base, 'timer');
    this.time = this.AddDiv(base, 'timer-div');
  }

  StartTimer(timeMillis: number) {
    this.UpdateTime(timeMillis);
    AnimateCSS(this.time, AnimationType.FadeIn).then(() => {
      return AnimateCSS(this.time, AnimationType.HeartBeat);
    });
  }

  UpdateTime(timeMillis: number) {
    const timeSeconds = Math.ceil(timeMillis / 1000);
    if (this.currentTime === timeSeconds) {
      return;
    }
    if (timeSeconds === 0) {
      return;
    }
    this.currentTime = timeSeconds;
    this.time.innerText = timeSeconds.toFixed(0) + 's left!';
    switch (timeSeconds) {
      case 10:
        AnimateCSS(this.time, AnimationType.HeartBeat);
        break;
      case 5:
      case 4:
      case 3:
      case 2:
      case 1:
        AnimateCSS(this.time, AnimationType.Pulse);
        break;
    }
  }

  TimeExhausted() {
    this.time.innerText = "Time's up!";
    AnimateCSS(this.time, AnimationType.Pulse);
  }
}
