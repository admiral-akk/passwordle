import {AnnotatedWord} from '../model/PlayerModel';
import {Word} from '../structs/Word';
import {Command} from './Command';

export class AddKey extends Command {
  constructor(public key: string) {
    super(AddKey.name);
  }
}
export class LockGuess extends Command {
  constructor() {
    super(LockGuess.name);
  }
}
export class Delete extends Command {
  constructor() {
    super(Delete.name);
  }
}
export class TheyAddedKey extends Command {
  constructor() {
    super(TheyAddedKey.name);
  }
}
export class TheyLockedGuess extends Command {
  constructor() {
    super(TheyLockedGuess.name);
  }
}
export class TheyDeleted extends Command {
  constructor() {
    super(TheyDeleted.name);
  }
}
export class RevealGuess extends Command {
  constructor(public guess: Word) {
    super(RevealGuess.name);
  }
}
export class YourForcedGuess extends Command {
  constructor(public guess: Word) {
    super(YourForcedGuess.name);
  }
}
export class RevealAnnotations extends Command {
  constructor(
    public yourAnnotation: AnnotatedWord,
    public theirAnnotation: AnnotatedWord
  ) {
    super(RevealAnnotations.name);
  }
}
export class TheyDisconnected extends Command {
  constructor() {
    super(TheyDisconnected.name);
  }
}
export class GameFinished extends Command {
  constructor(
    public yourAnnotation: AnnotatedWord,
    public theirAnnotation: AnnotatedWord
  ) {
    super(GameFinished.name);
  }
}
