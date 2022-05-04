import {CharUpdate} from '../../game/client/view/CharUpdate';
import {GameView} from '../../game/client/view/GameView';
import {Word} from '../../game/structs/Word';
import {NewGameClientToServerEvents} from '../network/GameNetworkTypes';
import {
  AddedChar,
  Deleted,
  UpdatedAnswerKnowledge,
} from '../network/updates/Updates';

enum State {
  WaitingForKnowledge,
  CanSubmit,
}

export class PlayerBoard {
  constructor(private view: GameView | null = null) {}

  state: State = State.WaitingForKnowledge;
  guesses: Word[] = [];
  currentGuess = '';

  AddChar(char: string): AddedChar | null {
    if (this.state !== State.CanSubmit) {
      return null;
    }
    if (this.currentGuess.length === 5) {
      return null;
    }
    const update = new CharUpdate(
      char,
      this.guesses.length,
      this.currentGuess.length
    );
    this.view?.CharUpdate(update);
    this.currentGuess += char;
    return new AddedChar(char);
  }

  Delete(): Deleted | null {
    if (this.state !== State.CanSubmit) {
      return null;
    }
    if (this.currentGuess.length === 0) {
      return null;
    }
    this.currentGuess = this.currentGuess.slice(0, -1);
    const update = new CharUpdate(
      '',
      this.guesses.length,
      this.currentGuess.length
    );
    this.view?.CharUpdate(update);
    return new Deleted();
  }

  OpponentAddedChar() {}
  UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge) {
    this.state = State.CanSubmit;
    this.view?.SetSecret(update.playerWord);
  }
}
