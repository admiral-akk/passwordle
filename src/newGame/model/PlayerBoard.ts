import {CharUpdate} from '../../game/client/view/CharUpdate';
import {GameView} from '../../game/client/view/GameView';
import {ToWord, Word} from '../../game/structs/Word';
import {IsValidWord} from '../../game/Words';
import {
  NewGameClientToServerEvents,
  NewGameServerToClientEvents,
} from '../network/GameNetworkTypes';
import {
  AddedChar,
  Deleted,
  Submitted,
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
  OpponentSubmitted() {}

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

  Submitted(update: Submitted) {
    this.guesses.push(update.guess);
    this.currentGuess = '';
    this.state = State.WaitingForKnowledge;
  }

  state: State = State.WaitingForKnowledge;
  guesses: Word[] = [];
  currentGuess = '';
  secret: Word | null = null;

  AddCharCommand(char: string): AddedChar | null {
    if (this.state !== State.CanSubmit) {
      return null;
    }
    if (this.currentGuess.length === 5) {
      return null;
    }
    return new AddedChar(char);
  }

  DeleteCommand(): Deleted | null {
    if (this.state !== State.CanSubmit) {
      return null;
    }
    if (this.currentGuess.length === 0) {
      return null;
    }
    return new Deleted();
  }

  SubmitCommand(): Submitted | null {
    if (this.state !== State.CanSubmit) {
      return null;
    }
    console.log('');
    if (this.currentGuess.length !== 5) {
      return null;
    }
    const guess = ToWord(this.currentGuess);
    if (!IsValidWord(guess)) {
      return null;
    }
    return new Submitted(guess);
  }

  OpponentAddedChar() {}
  OpponentDeleted() {}
  UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge) {
    this.state = State.CanSubmit;
    this.secret = update.playerWord;
    this.view?.SetSecret(update.playerWord);
  }
}
