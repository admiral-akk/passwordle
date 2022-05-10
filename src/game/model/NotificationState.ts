import {NotificationView} from './view/NotificationView';

export class NotificationState {
  private view: NotificationView | null = null;
  constructor(hasView: boolean) {
    if (hasView) {
      this.view = new NotificationView();
    }
  }
  Reset() {
    this.view?.Reset();
  }
  Exit() {
    this.view?.Exit();
  }

  Won(): Promise<void> {
    if (this.view) {
      return this.view?.Won();
    }
    return Promise.resolve();
  }

  Lost(): Promise<void> {
    if (this.view) {
      return this.view?.Lost();
    }
    return Promise.resolve();
  }

  Tied(): Promise<void> {
    if (this.view) {
      return this.view?.Tie();
    }
    return Promise.resolve();
  }
}
