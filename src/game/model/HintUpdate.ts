import {Hint} from '../client/structs/Hint';

export class HintUpdate {
  hint: Hint;
  guessIndex: number;
  constructor(hint: Hint, guessIndex: number) {
    this.hint = hint;
    this.guessIndex = guessIndex;
  }
}
