import {CharUpdate} from '../../game/client/view/CharUpdate';
import {GameView} from '../../game/client/view/GameView';
import {Word} from '../../game/structs/Word';
import {
  NewGameClientToServerEvents,
  NewGameServerToClientEvents,
} from '../network/GameNetworkTypes';
import {
  AddedChar,
  Deleted,
  UpdatedAnswerKnowledge,
} from '../network/updates/Updates';

enum State {
  WaitingForKnowledge,
  CanSubmit,
}

export class PlayerBoard
  implements NewGameClientToServerEvents, NewGameServerToClientEvents
{
  constructor(private view: GameView | null = null) {}

  AddedChar(update: AddedChar) {
    const viewUpdate = new CharUpdate(
      update.char,
      this.guesses.length,
      this.currentGuess.length
    );
    this.view?.CharUpdate(viewUpdate);
    this.currentGuess += update.char;
  }

  Deleted() {
    this.currentGuess = this.currentGuess.slice(0, -1);
    const update = new CharUpdate(
      '',
      this.guesses.length,
      this.currentGuess.length
    );
    this.view?.CharUpdate(update);
  }

  state: State = State.WaitingForKnowledge;
  guesses: Word[] = [];
  currentGuess = '';
  secret: Word | null = null;

  AddChar(char: string): AddedChar | null {
    if (this.state !== State.CanSubmit) {
      return null;
    }
    if (this.currentGuess.length === 5) {
      return null;
    }
    this.AddedChar(new AddedChar(char));
    return new AddedChar(char);
  }

  Delete(): Deleted | null {
    if (this.state !== State.CanSubmit) {
      return null;
    }
    if (this.currentGuess.length === 0) {
      return null;
    }
    this.Deleted();
    return new Deleted();
  }

  OpponentAddedChar() {}
  OpponentDeleted() {}
  UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge) {
    this.state = State.CanSubmit;
    this.secret = update.playerWord;
    this.view?.SetSecret(update.playerWord);
  }
}
