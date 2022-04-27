import {
  AddCharCommand,
  DeleteCommand,
  GameStateEvent,
  SubmitCommand,
  SubmitGuessEvent,
} from './Events';
import {PlayerStates} from './structs/PlayerStates';
import {BoardView} from './views/BoardView';

export abstract class BoardManager {
  protected boardView: BoardView;
  constructor() {
    this.boardView = new BoardView(6, 5);
  }
}

export class PlayerBoardManager extends BoardManager {
  private currentGuess: string;
  private guessCount: number;

  constructor() {
    super();
    this.currentGuess = '';
    this.guessCount = 0;
    this.RegisterListeners();
  }

  private AddChar(char: string) {
    if (this.currentGuess.length >= 5) {
      return;
    }
    this.currentGuess += char;
    this.boardView.UpdateGuess(this.currentGuess, this.guessCount);
  }

  private Delete() {
    if (this.currentGuess.length <= 0) {
      return;
    }
    this.currentGuess += this.currentGuess.slice(0, -1);
    this.boardView.UpdateGuess(this.currentGuess, this.guessCount);
  }

  private Submit() {
    if (this.currentGuess.length !== 5) {
      return;
    }
    document.dispatchEvent(new SubmitGuessEvent(this.currentGuess));
    this.currentGuess = '';
    this.guessCount++;
  }

  UpdateGameState(state: PlayerStates) {
    this.boardView.UpdateWords(state.playerMoves);
  }

  private RegisterListeners() {
    document.addEventListener(SubmitCommand.name, e => {
      this.Submit();
    });
    document.addEventListener(AddCharCommand.name, e => {
      const event = e as AddCharCommand;
      this.AddChar(event.detail);
    });
    document.addEventListener(DeleteCommand.name, e => {
      this.Delete();
    });
    document.addEventListener(GameStateEvent.name, e => {
      const event = e as GameStateEvent;
      this.UpdateGameState(event.detail);
    });
  }
}

export class OpponentBoardManager extends BoardManager {
  constructor() {
    super();
    this.RegisterListeners();
  }

  private RegisterListeners() {
    document.addEventListener(GameStateEvent.name, e => {
      const event = e as GameStateEvent;
      this.UpdateGameState(event.detail);
    });
  }

  UpdateGameState(state: PlayerStates) {
    this.boardView.UpdateWords(state.opponentMoves);
  }
}
