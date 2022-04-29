import {Subview} from './Subview';

const KEYBOARD_KEYS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['Del', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Enter'],
];

export class KeyboardView extends Subview {
  constructor(base: HTMLElement) {
    super(base, 'keyboard');
  }
}
