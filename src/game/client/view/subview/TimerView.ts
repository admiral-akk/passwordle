import {Subview} from './Subview';

export class TimerView extends Subview {
  constructor(base: HTMLElement) {
    super(base, 'timer');
  }
  Reset(): void {}
}
