import {CharUpdate} from '../../game/client/view/CharUpdate';
import {GameView} from '../../game/client/view/GameView';
import {Word} from '../../game/structs/Word';
import {AddedChar, UpdatedAnswerKnowledge} from '../network/updates/Updates';

enum State {
  None,
  WaitingForKnowledge,
  CanSubmit,
}

export class PlayerBoard {
  constructor(private view: GameView | null = null) {}
  state: State = State.None;
  guesses: Word[] = [];
  currentGuess = '';
  AddChar(char: string): AddedChar {
    const update = new CharUpdate(
      char,
      this.guesses.length,
      this.currentGuess.length
    );
    this.view?.CharUpdate(update);
    return new AddedChar(char);
  }

  OpponentAddedChar() {}

  Ready() {
    this.state = State.WaitingForKnowledge;
  }

  IsReady(): boolean {
    return this.state === State.WaitingForKnowledge;
  }

  UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge) {
    this.view?.SetSecret(update.playerWord);
  }
}
