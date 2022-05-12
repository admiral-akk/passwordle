import {Subview} from './view/Subview';

export abstract class ModelState<ViewType extends Subview> {
  constructor(protected view?: ViewType) {}

  Exit() {
    this.view?.Exit();
  }
}
