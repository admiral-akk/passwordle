import {ModelState} from './ModelState';
import {KeyboardView} from './view/KeyboardView';

export class KeyboardState extends ModelState<KeyboardView> {
  Reset(): void {
    this.view?.Reset();
  }
  constructor(hasView: boolean, input: (key: string) => void) {
    super(KeyboardView, hasView);
    this.view?.Initialize(input);
  }
}
