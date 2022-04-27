import {WordKnowledge} from '../knowledge';
import {NewMove} from './Move';

export class AnnotatedMove {
  public move: NewMove;
  public knowledge: WordKnowledge;
  constructor(move: NewMove, knowledge: WordKnowledge) {
    this.move = move;
    this.knowledge = knowledge;
  }
}
