import {Hint} from '../structs/Hint';

export class HintUpdate {
  hint: Hint;
  guessIndex: number;
  constructor(hint: Hint, guessIndex: number) {
    this.hint = hint;
    this.guessIndex = guessIndex;
  }
}
