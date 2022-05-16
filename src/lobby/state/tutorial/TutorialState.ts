import {LobbyClientSocket} from '../../../network/LobbyNetworkTypes';
import {FindLobbyIdInURL, LobbyId} from '../../../structs/LobbyId';
import {LobbyState} from '../LobbyState';
import {MenuState} from '../menu/MenuState';
import {Modal} from '../Modal';

export class TutorialState extends LobbyState {
  private modal: SimpleTutorialModal = new SimpleTutorialModal();
  protected Enter(): void {
    const lobbyId = FindLobbyIdInURL();
    if (lobbyId) {
      this.modal.SetExitCallback(
        () => this.JoinLobby(lobbyId),
        State.JoinLobby
      );
    } else {
      this.RequestLobbyId();
    }
  }
  public Exit(): Promise<void> {
    return this.modal.Exit();
  }

  private lobbyId?: LobbyId;

  protected Register(socket: LobbyClientSocket): void {
    socket.on('EnterMenu', (lobbyId: LobbyId) => {
      this.modal.SetExitCallback(
        () => this.EnterMenu(lobbyId),
        State.EnterMenu
      );
    });
  }

  EnterMenu(lobbyId: LobbyId) {
    this.SwitchState(new MenuState(lobbyId));
  }

  RequestLobbyId() {
    this.socket?.emit('RequestLobbyId');
  }

  JoinLobby(lobbyId: LobbyId) {
    this.socket?.emit('JoinLobby', lobbyId);
  }

  protected Deregister(socket: LobbyClientSocket): void {
    socket.removeAllListeners('EnterMenu');
  }
}

enum State {
  None,
  JoinLobby,
  EnterMenu,
}

const TEXT = [
  '<strong>You</strong> are trying to guess <strong>their</strong> password.',
  '<strong>They</strong> are trying to guess <strong>your</strong> password.',
  '<em>Both</em> your and their guess will show <strong>you</strong> clues for <strong>their</strong> password.',
  '<em>Both</em> your and their guess will show <strong>them</strong> clues for <strong>your</strong> password.',
  'If they submit a guess first, you have <em>30 seconds</em> to submit a guess.',
  '<em>Win</em> by guessing their password <em>before</em> they guess yours.',
];

class SimpleTutorialModal extends Modal {
  private state = State.None;
  private container: HTMLElement;
  private exitButton: HTMLButtonElement;
  SetExitCallback(callback: () => void, type: State) {
    this.state = type;
    this.exitButton.onclick = callback;
  }
  constructor() {
    super();
    this.container = this.AddDiv('tutorial-container');

    const textContainer = this.AddRootDiv(
      this.container,
      'tutorial-text-container'
    );

    for (let i = 0; i < TEXT.length; i++) {
      if (i > 0 && i % 2 === 0) {
        this.AddRootDiv(textContainer, 'tutorial-text-seperator');
      }
      this.AddParagraph('tutorial-text-paragraph', TEXT[i], textContainer);
    }
    const exitContainer = this.AddRootDiv(
      this.container,
      'tutorial-exit-container'
    );
    this.exitButton = this.AddButton(
      exitContainer,
      'exit-button',
      'Enter Game',
      () => {}
    );
  }
}
