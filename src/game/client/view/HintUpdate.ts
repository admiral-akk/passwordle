import {WordKnowledge} from '../../logic/Knowledge';

export class HintUpdate {
  playerKnowledge: WordKnowledge;
  opponentKnowledge: WordKnowledge;
  guessIndex: number;
  constructor(
    playerKnowledge: WordKnowledge,
    opponentKnowledge: WordKnowledge,
    guessIndex: number
  ) {
    this.playerKnowledge = playerKnowledge;
    this.opponentKnowledge = opponentKnowledge;
    this.guessIndex = guessIndex;
  }
}
