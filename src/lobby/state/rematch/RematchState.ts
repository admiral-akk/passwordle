import {TargetProgress} from '../../../structs/TargetProgress';
import {LetterColor} from '../../../game/model/view/word/letter/LetterView';
import {BaseWordView} from '../../../game/model/view/word/WordView';
import {Word} from '../../../structs/Word';
import {LobbyState} from '../../../client/PlayerState';
import {
  EndGameState,
  EndGameSummary,
  GetEndGameState,
} from '../../../structs/EndGameState';
import {LobbyId} from '../../../structs/LobbyId';
import {LobbyClientSocket} from '../../../network/LobbyNetworkTypes';
import {MenuState} from '../menu/MenuState';
import {Modal} from '../Modal';

enum State {
  None,
  RematchDeclined,
  RematchRequested,
}

export class RematchState extends LobbyState {
  protected Enter(): void {}
  public Exit(): Promise<void> {
    return this.modal.RematchExit(this.state);
  }

  private state: State = State.None;
  protected Register(socket: LobbyClientSocket): void {
    socket.on('EnterMenu', (lobbyId: LobbyId) => {
      this.state = State.RematchDeclined;
      this.EnterMenu(lobbyId);
    });
  }
  protected Deregister(socket: LobbyClientSocket): void {
    socket.removeAllListeners('EnterMenu');
  }

  constructor(private endState: EndGameSummary) {
    super();
  }
  private modal: RematchModal = new RematchModal(
    () => this.RequestRematch(),
    () => this.ReturnToMenu(),
    this.endState
  );

  private RequestRematch() {
    this.state = State.RematchRequested;
    this.socket?.emit('RequestRematch');
  }
  private ReturnToMenu() {
    this.state = State.RematchDeclined;
    this.socket?.emit('DeclineRematch');
  }

  EnterMenu(lobbyId: LobbyId) {
    this.SwitchState(new MenuState(lobbyId));
  }
}

class RematchModal extends Modal {
  RematchExit(state: State): Promise<void> {
    return new Promise(resolve => {
      if (state === State.RematchDeclined) {
        resolve(this.RematchDeclined());
      } else {
        resolve(this.RematchAccepted());
      }
    })
      .then(() => new Promise(resolve => setTimeout(resolve, 1500)))
      .then(() => super.Exit());
  }

  private RematchDeclined() {
    this.rematchDiv.innerText = 'Rematch declined, returning to menu.';
  }

  private RematchAccepted() {
    this.rematchDiv.innerText = 'Rematch accepted. Good luck!';
  }

  private RematchRequested() {
    this.rematchDiv.innerText = 'Rematch requested. Waiting for opponent.';
  }

  private rematchDiv: HTMLDivElement;
  private rematchButton: HTMLButtonElement;

  constructor(
    requestRematch: () => void,
    returnToMenu: () => void,
    endState: EndGameSummary
  ) {
    super();
    this.AddDiv(
      'explain-game',
      `In Passwordle, each player has a different password.

    The winner is the first to figure out their opponent's password.
    
    However, each guess gives clues to both players. For example:
    
    If your password is 'FLAME', and you guess 'FLEET', then your opponent will see that your password is 'FL___' and contains an 'E'.`
    );
    this.AddDiv('menu-seperator');
    this.AddMatchOutcome(endState);
    this.AddDiv('menu-seperator');
    this.rematchDiv = this.AddDiv('rematch-text');
    const buttons = this.AddDiv('menu-buttons');
    this.AddButton(buttons, 'to-menu', 'Return to Menu', () => {
      this.rematchButton.disabled = true;
      returnToMenu();
    });
    this.rematchButton = this.AddButton(
      buttons,
      'request-rematch',
      'Request Rematch',
      () => {
        requestRematch();
        this.RematchRequested();
        this.rematchButton.disabled = true;
      }
    );
  }

  private AddMatchOutcome(endState: EndGameSummary) {
    const answerDiv = this.AddDiv('match-answers');

    let text: string;
    switch (GetEndGameState(endState)) {
      default:
        text = '';
        break;
      case EndGameState.Loss:
        text = 'You lost!';
        break;
      case EndGameState.Win:
        text = 'You won!';
        break;
      case EndGameState.Tie:
        text = 'You tied!';
        break;
    }
    this.AddRootDiv(answerDiv, 'match-outcome', text);

    const yourPassword = new RematchWordView(answerDiv);
    yourPassword.SetState(
      endState.yourPassword,
      endState.opponentProgress,
      LetterColor.Red
    );
    const opponentPassword = new RematchWordView(answerDiv);
    opponentPassword.SetState(
      endState.opponentPassword,
      endState.yourProgress,
      LetterColor.Green
    );
  }
}

class RematchWordView extends BaseWordView {
  public SetState(
    password: Word,
    progress: TargetProgress,
    color: LetterColor
  ) {
    for (let i = 0; i < password.length; i++) {
      this.letters[i].SetChar(password[i]);
      if (progress.knownCharacters[i] !== '') {
        this.letters[i].SetColor(color);
      }
    }
  }
}
