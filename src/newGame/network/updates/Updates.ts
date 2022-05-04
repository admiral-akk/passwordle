import {Word} from '../../../game/structs/Word';

export class AddedChar {
  constructor(public char: string) {}
}
export class PlayerKnowledge {
  constructor(public playerWord: Word) {}
}
