import {Subview} from './Subview';

const KEYS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['ENTER', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'DEL'],
];

export class KeyboardView extends Subview {
  constructor() {
    const base = document.getElementById('keyboard')!;
    super(base, 'keyboard');
  }

  Initialize(input: (key: string) => void): void {
    KEYS.forEach(row => {
      const rowElement = this.AddDiv(this.root, 'keyboard-row');
      row.forEach(key => {
        this.AddButton(rowElement, 'keyboard-key', key, () => input(key));
      });
    });
  }
  Reset(): void {}
}
