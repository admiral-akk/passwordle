import {AnnotatedMove} from './AnnotatedMove';
import {GameState} from './GameState';
import {PlayerId} from './PlayerId';

export class PlayerStates {
  playerMoves: AnnotatedMove[];
  opponentMoves: AnnotatedMove[];
  constructor(state: GameState, playerId: PlayerId) {
    this.playerMoves = state.moves.filter(
      move => move.move.player === playerId
    );
    this.opponentMoves = state.moves.filter(
      move => move.move.player !== playerId
    );
  }
}
