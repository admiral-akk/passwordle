import {LobbyId} from '../structs/LobbyId';

enum LobbyState {
  None,
  InLobby,
  InGame,
}

export class LobbyModel {
  state: LobbyState = LobbyState.None;
  lobbyId?: LobbyId;
  playerCount = 0;
  rematchRequestCount = 0;
  requestedRematch = false;

  CreatedLobby(lobbyId: LobbyId) {
    this.state = LobbyState.InLobby;
    this.lobbyId = lobbyId;
    this.playerCount = 1;
  }

  JoinedLobby(lobbyId: LobbyId) {
    this.state = LobbyState.InLobby;
    this.lobbyId = lobbyId;
    this.playerCount = 2;
  }

  TheyJoinedLobby() {
    this.playerCount = 2;
  }

  StartedGame() {
    this.state = LobbyState.InGame;
  }

  GameFinished(yourPassword: AnnotatedWord, theirPassword: AnnotatedWord) {
    this.state = LobbyState.InLobby;
    this.rematchRequestCount = 0;
    this.requestedRematch = false;
  }

  RequestedRematch() {
    this.requestedRematch = true;
    this.rematchRequestCount++;
  }

  TheyRequestedRematch() {
    this.rematchRequestCount++;
  }

  RematchRejected(lobbyId: LobbyId) {
    this.lobbyId = lobbyId;
    this.playerCount = 1;
    this.rematchRequestCount = 0;
    this.requestedRematch = false;
  }
}

enum GameState {
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

enum Knowledge {
  None,
  NotInWord,
  WrongPosition,
  Correct,
}

class AnnotatedWord {
  constructor(public word: string, public annotation: Knowledge[] = []) {}
}
