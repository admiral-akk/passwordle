import {WordKnowledge} from './Knowledge';
import {Move} from './Move';

export class AnnotatedMove {
  public move: Move;
  public knowledge: WordKnowledge;
  constructor(move: Move, knowledge: WordKnowledge) {
    this.move = move;
    this.knowledge = knowledge;
  }
}
