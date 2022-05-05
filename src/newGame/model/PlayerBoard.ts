import {Hint} from '../../game/client/structs/Hint';
import {CharUpdate} from '../../game/client/view/CharUpdate';
import {GameView} from '../../game/client/view/GameView';
import {HintUpdate} from '../../game/client/view/HintUpdate';
import {GetKnowledge} from '../../game/logic/WordleLogic';
import {ToWord, Word} from '../../game/structs/Word';
import {IsValidWord} from '../../game/Words';
import {
  NewGameClientToServerEvents,
  NewGameServerToClientEvents,
} from '../network/GameNetworkTypes';
import {
  AddedChar,
  Deleted,
  LockedGuess,
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
  OpponentLockedGuess() {}

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

  LockedGuess(update: LockedGuess) {
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

  SubmitCommand(): LockedGuess | null {
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
    return new LockedGuess(guess);
  }

  OpponentAddedChar() {}
  OpponentDeleted() {}

  UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge) {
    this.state = State.CanSubmit;
    const hint = new Hint(
      update.playerKnowledge,
      update.opponentKnowledge,
      update.playerProgress,
      update.opponentProgress
    );
    const hintUpdate = new HintUpdate(hint, this.guesses.length - 1);
    this.view?.HintUpdate(hintUpdate);
  }

  SetSecret(secret: Word) {
    this.secret = secret;
    this.view?.SetSecret(secret);
    this.state = State.CanSubmit;
  }
}
