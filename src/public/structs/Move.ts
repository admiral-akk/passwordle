export class NewMove {
  public player: string;
  public guess: string;
  constructor(player: string, guess: string) {
    this.player = player;
    this.guess = guess;
  }
}
