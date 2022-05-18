import {TargetProgress} from '../../../structs/TargetProgress';
import {LetterColor} from '../../../game/model/view/word/letter/LetterView';
import {BaseWordView} from '../../../game/model/view/word/WordView';
import {Word} from '../../../structs/Word';
import {LobbyState} from '../LobbyState';
import {EndGameState, EndGameSummary} from '../../../structs/EndGameState';
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

  constructor(
    requestRematch: () => void,
    returnToMenu: () => void,
    endState: EndGameSummary
  ) {
    super('rematch');
    this.AddMatchOutcome(endState);
    this.rematchDiv = this.AddDiv('rematch-text');
    const buttons = this.AddDiv('menu-button-container');
    this.returnToMenuButton = this.AddButton(
      'menu-button',
      'Return to Menu',
      () => {
        this.rematchButton.disabled = true;
        returnToMenu();
      },
      buttons
    );
    this.rematchButton = this.AddButton(
      'menu-button',
      'Request Rematch',
      () => {
        requestRematch();
        this.RequestingRematch();
        this.rematchButton.disabled = true;
      },
      buttons
    );
    if (endState.endState === EndGameState.Disconnected) {
      this.rematchButton.style.display = 'none';
    }
  }

  private AddMatchOutcome(endState: EndGameSummary) {
    const answerDiv = this.AddDiv('match-answers');

    let text: string;
    switch (endState.endState) {
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
      case EndGameState.Disconnected:
        text = 'They forfeit!';
        break;
    }
    this.AddDiv('match-outcome', text, answerDiv);

    const yourPasswordContainer = this.AddDiv('rematch-answer', '', answerDiv);
    const yourContainer = this.AddDiv(
      'rematch-password-container',
      '',
      yourPasswordContainer
    );
    const yourPassword = new RematchWordView(yourContainer);
    yourPassword.SetState(
      endState.yourPassword,
      endState.yourProgress,
      LetterColor.Red
    );

    const opponentPasswordContainer = this.AddDiv(
      'rematch-answer',
      '',
      answerDiv
    );
    const opponentContainer = this.AddDiv(
      'rematch-password-container',
      '',
      opponentPasswordContainer
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
