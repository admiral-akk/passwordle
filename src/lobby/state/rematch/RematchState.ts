import {TargetProgress} from '../../../structs/TargetProgress';
import {LetterColor} from '../../../game/model/view/word/letter/LetterView';
import {BaseWordView} from '../../../game/model/view/word/WordView';
import {Word} from '../../../structs/Word';
import {LobbyState} from '../LobbyState';
import {
  EndGameState,
  EndGameSummary,
  GetEndGameState,
} from '../../../structs/EndGameState';
import {LobbyId} from '../../../structs/LobbyId';
import {LobbyClientSocket} from '../../../network/LobbyNetworkTypes';
import {MenuState} from '../menu/MenuState';
import {Modal} from '../Modal';
import {AddPopup} from '../../../game/model/view/Animate';

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
    socket.on('RematchRequested', () => {
      this.modal.RematchRequested();
    });
  }
  protected Deregister(socket: LobbyClientSocket): void {
    socket.removeAllListeners('EnterMenu');
    socket.removeAllListeners('RematchRequested');
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
      this.rematchButton.disabled = true;
      this.returnToMenuButton.disabled = true;
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
    this.rematchDiv.innerText = 'Returning to menu.';
  }

  private RematchAccepted() {
    this.rematchDiv.innerText = 'Rematch accepted!';
  }

  public RematchRequested() {
    this.rematchDiv.innerText = 'They requested rematch!';
    this.rematchButton.innerText = 'Accept Rematch';
  }

  private RequestingRematch() {
    this.rematchDiv.innerText = 'Waiting for response...';
    AddPopup(this.container, 'Rematch requested!', 350, 'white');
  }

  private rematchDiv: HTMLDivElement;
  private returnToMenuButton: HTMLButtonElement;
  private rematchButton: HTMLButtonElement;
  private container: HTMLElement;

  constructor(
    requestRematch: () => void,
    returnToMenu: () => void,
    endState: EndGameSummary
  ) {
    super();
    this.container = this.AddDiv('rematch-container');
    this.AddMatchOutcome(endState);
    this.rematchDiv = this.AddRootDiv(this.container, 'rematch-text');
    const buttons = this.AddRootDiv(this.container, 'menu-button-container');
    this.returnToMenuButton = this.AddButton(
      buttons,
      'menu-button',
      'Return to Menu',
      () => {
        this.rematchButton.disabled = true;
        returnToMenu();
      }
    );
    this.rematchButton = this.AddButton(
      buttons,
      'menu-button',
      'Request Rematch',
      () => {
        requestRematch();
        this.RequestingRematch();
        this.rematchButton.disabled = true;
      }
    );
  }

  private AddMatchOutcome(endState: EndGameSummary) {
    const answerDiv = this.AddRootDiv(this.container, 'match-answers');

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

    const yourPasswordContainer = this.AddRootDiv(answerDiv, 'rematch-answer');
    const yourContainer = this.AddRootDiv(
      yourPasswordContainer,
      'rematch-password-container'
    );
    const yourPassword = new RematchWordView(yourContainer);
    yourPassword.SetState(
      endState.yourPassword,
      endState.yourProgress,
      LetterColor.Red
    );

    const opponentPasswordContainer = this.AddRootDiv(
      answerDiv,
      'rematch-answer'
    );
    const opponentContainer = this.AddRootDiv(
      opponentPasswordContainer,
      'rematch-password-container'
    );
    const opponentPassword = new RematchWordView(opponentContainer);
    opponentPassword.SetState(
      endState.opponentPassword,
      endState.opponentProgress,
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
