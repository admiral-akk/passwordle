import {Hint} from '../client/structs/Hint';
import {CharUpdate} from '../client/view/CharUpdate';
import {GameView} from '../client/view/GameView';
import {HintUpdate} from '../client/view/HintUpdate';
import {
  OpponentUpdate,
  OpponentUpdateType,
} from '../client/view/OpponentUpdate';
import {ToWord, Word} from '../structs/Word';
import {IsValidWord} from '../Words';
import {
  GameClientToServerEvents,
  GameServerToClientEvents,
} from '../network/GameNetworkTypes';
import {
  AddedChar,
  Deleted,
  Gameover,
  LockedGuess,
  Loss,
  Tie,
  UpdatedAnswerKnowledge,
  Win,
} from '../network/updates/Updates';

enum State {
  WaitingForKnowledge,
  CanSubmit,
  GameEnded,
}

export class PlayerBoard
  implements GameClientToServerEvents, GameServerToClientEvents
{
  state: State = State.WaitingForKnowledge;
  guesses: Word[] = [];
  currentGuess = '';
  private GuessCount(): number {
    if (this.state === State.WaitingForKnowledge) {
      return this.guesses.length - 1;
    }
    return this.guesses.length;
  }
  opponentCharCount = 0;
  secret: Word | null = null;

  constructor(
    private view: GameView | null = null,
    private showMenu: () => void = () => {}
  ) {}

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

  OpponentAddedChar() {
    const update = new OpponentUpdate(
      OpponentUpdateType.AddChar,
      this.GuessCount(),
      this.opponentCharCount
    );
    this.view?.OpponentUpdate(update);
    this.opponentCharCount++;
  }
  OpponentDeleted() {
    this.opponentCharCount--;
    const update = new OpponentUpdate(
      OpponentUpdateType.Delete,
      this.GuessCount(),
      this.opponentCharCount
    );
    this.view?.OpponentUpdate(update);
  }
  OpponentLockedGuess() {
    this.opponentCharCount = 0;
    const update = new OpponentUpdate(
      OpponentUpdateType.Submit,
      this.GuessCount(),
      this.opponentCharCount
    );
    this.view?.OpponentUpdate(update);
  }

  UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge) {
    this.state = State.CanSubmit;
    const hint = new Hint(
      update.playerKnowledge,
      update.opponentKnowledge,
      update.playerProgress,
      update.opponentProgress
    );
    const hintUpdate = new HintUpdate(hint, this.guesses.length - 1);
    this.view?.HintUpdate(hintUpdate, () => this.CheckGameOver(update));
    if (Gameover(update)) {
      this.state = State.GameEnded;
    }
  }

  private CheckGameOver(update: UpdatedAnswerKnowledge) {
    if (this.state !== State.GameEnded) {
      return;
    }
    if (Win(update)) {
      this.view?.GameOver(true);
    }
    if (Loss(update)) {
      this.view?.GameOver(false);
    }
    if (Tie(update)) {
      this.view?.GameOver(false);
    }
    this.showMenu();
  }

  SetSecret(secret: Word) {
    this.Reset();
    this.secret = secret;
    this.view?.SetSecret(secret);
    this.state = State.CanSubmit;
  }

  private Reset() {
    this.secret = null;
    this.state = State.WaitingForKnowledge;
    this.guesses = [];
    this.currentGuess = '';
    this.view?.Reset();
  }
}
