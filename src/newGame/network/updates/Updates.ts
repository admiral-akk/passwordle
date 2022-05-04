import {Word} from '../../../game/structs/Word';

export class AddedChar {
  constructor(public char: string) {}
}

export class Deleted {}

export class UpdatedAnswerKnowledge {
  constructor(public playerWord: Word) {}
}
