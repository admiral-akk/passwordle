export class HintUpdate {
  opponentGuess: string;
  guessIndex: number;
  constructor(opponentGuess: string, guessIndex: number) {
    this.opponentGuess = opponentGuess;
    this.guessIndex = guessIndex;
  }
}
