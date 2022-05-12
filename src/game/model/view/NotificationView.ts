import {Subview} from './Subview';

export class NotificationView extends Subview {
  constructor() {
    const base = document.getElementById('notification')!;
    super(base, 'notification');
  }

  private SetText(text: string): Promise<void> {
    return new Promise(resolve => {
      this.root.innerText = text;
      resolve();
    });
  }

  Won(): Promise<void> {
    return this.SetText('You won!');
  }

  Lost(): Promise<void> {
    return this.SetText('You lost!');
  }

  Tie(): Promise<void> {
    return this.SetText('You tied!');
  }
}
