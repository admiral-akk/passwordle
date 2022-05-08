import {Subview} from './Subview';

export class ExplanationView extends Subview {
  Reset(): void {
    throw new Error('Method not implemented.');
  }
  constructor(base: HTMLElement, text = '') {
    super(base, 'explanation', text);
  }
}
