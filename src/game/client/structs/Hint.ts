import {WordKnowledge} from '../../logic/Knowledge';

export class Hint {
  playerGuess: WordKnowledge;
  opponentGuess: WordKnowledge;
  constructor(playerGuess: WordKnowledge, opponentGuess: WordKnowledge) {
    this.playerGuess = playerGuess;
    this.opponentGuess = opponentGuess;
  }
}
