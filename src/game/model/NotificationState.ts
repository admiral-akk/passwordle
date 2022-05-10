import {ModelState} from './ModelState';
import {NotificationView} from './view/NotificationView';

export class NotificationState extends ModelState<NotificationView> {
  constructor(hasView: boolean) {
    super(NotificationView, hasView);
  }
  Reset() {
    this.view?.Reset();
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
