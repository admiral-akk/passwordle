import {AnimateCSS, AnimationType} from './Animate';
import {Subview} from './Subview';

export class TimerView extends Subview {
  private time: HTMLDivElement;
  private currentTime = 0;

  Reset(): void {
    super.Reset();
    this.UpdateTime(30000);
  }

  constructor(base: HTMLElement) {
    super(base, 'timer');
    const title = this.AddDiv(this.root, 'title-div');
    title.innerText = 'Passwordle';
    const timeContainer = this.AddDiv(this.root, 'time-container');
    this.AddSpan(timeContainer, 'iconify timer-div', 'fa-solid:stopwatch');
    this.time = this.AddDiv(timeContainer, 'timer-div');
    this.UpdateTime(30000);
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
    this.time.innerText = '0:' + timeSeconds.toFixed(0).padStart(2, '0');
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
    this.time.innerText = '0:00';
    AnimateCSS(this.time, AnimationType.Pulse);
  }
}
