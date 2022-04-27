import {AnnotatedMove} from './AnnotatedMove';

export class GameState {
  public moves: AnnotatedMove[];
  public playerToMove: string;

  constructor(startingPlayer: string) {
    this.moves = [];
    this.playerToMove = startingPlayer;
  }

  AddMove(move: AnnotatedMove, opponent: string) {
    this.moves.push(move);
    this.playerToMove = opponent;
  }
}
