import {WordKnowledge} from './knowledge';

export class Move {
  public guess: string;
  public knowledge: WordKnowledge;

  constructor(guess: string, knowledge: WordKnowledge) {
    this.guess = guess;
    this.knowledge = knowledge;
  }
}

export class History {
  public history: Move[];

  constructor() {
    this.history = [];
  }

  public Add(guess: string, knowledge: WordKnowledge) {
    this.history.push(new Move(guess, knowledge));
  }
}
