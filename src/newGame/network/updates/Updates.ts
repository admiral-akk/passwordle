import {TargetProgress} from '../../../game/client/structs/TargetProgress';
import {WordKnowledge} from '../../../game/client/structs/WordKnowledge';
import {Word} from '../../../game/structs/Word';

export class AddedChar {
  constructor(public char: string) {}
}

export class Deleted {}

export class UpdatedAnswerKnowledge {
  constructor(
    public playerKnowledge: WordKnowledge,
    public opponentKnowledge: WordKnowledge,
    public playerProgress: TargetProgress,
    public opponentProgress: TargetProgress
  ) {}
}

export class LockedGuess {
  constructor(public guess: Word) {}
}
