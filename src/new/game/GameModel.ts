import {AnnotatedWord, Knowledge} from '../struct/AnnotatedWord';

export enum GameState {
  None,
  Empty,
  CanSubmit,
  Waiting,
  Gameover,
}

export class GameModel {
  state: GameState = GameState.None;
  currentGuess = '';
  theirCharCount = 0;
  yourGuesses: AnnotatedWord[] = [];
  theirGuesses: AnnotatedWord[] = [];
  theyLocked = false;
  yourPassword = '';

  GameStart() {
    this.state = GameState.Empty;
  }

  Added(char: string) {
    this.currentGuess += char;
  }

  Deleted() {
    this.currentGuess = this.currentGuess.slice(0, -1);
  }

  Locked() {
    this.yourGuesses.push(new AnnotatedWord(this.currentGuess));
    this.currentGuess = '';
    this.state = GameState.Waiting;
  }

  TheyAdded() {
    this.theirCharCount++;
  }

  TheyDeleted() {
    this.theirCharCount--;
  }

  TheyLocked() {
    this.theyLocked = true;
  }

  ShowTheirGuess(theirGuess: string) {
    this.theirGuesses.push(new AnnotatedWord(theirGuess));
    this.theirCharCount = 0;
  }

  UpdateInformation(
    yourGuessKnowledge: Knowledge[],
    theirGuessKnowledge: Knowledge[]
  ) {
    this.yourGuesses[-1].annotation = yourGuessKnowledge;
    this.theirGuesses[-1].annotation = theirGuessKnowledge;
    this.state = GameState.CanSubmit;
  }

  RandomGuess(guess: string) {
    this.currentGuess = guess;
    this.Locked();
  }

  Gameover() {
    this.state = GameState.Gameover;
  }

  SetYourPassword(password: string) {
    this.yourPassword = password;
    this.state = GameState.CanSubmit;
  }
}
