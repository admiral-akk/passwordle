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
    this.container = this.AddDiv('tutorial-container2');

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

class TutorialModal extends Modal {
  private container: HTMLElement;
  private pageNumberDiv: HTMLDivElement;
  private prevButton: HTMLButtonElement;
  private nextButton: HTMLButtonElement;
  private tutorialText: HTMLDivElement;
  private tutorialImage: HTMLImageElement;
  private exitButton: HTMLButtonElement;
  private pageIndex = 0;
  private state = State.None;

  private SetPage(index: number) {
    this.pageIndex = index;
    this.pageNumberDiv.innerText = `${this.pageIndex + 1}/${PAGE_COUNT}`;
    this.tutorialText.innerText = TUTORIAL_TEXT[this.pageIndex];
    this.tutorialImage.src = ImageSrc(this.pageIndex);
    this.prevButton.disabled = this.pageIndex === 0;
    this.nextButton.disabled = this.pageIndex === PAGE_COUNT - 1;
    if (this.pageIndex === PAGE_COUNT - 1) {
      switch (this.state) {
        case State.JoinLobby:
          this.exitButton.innerText = 'Enter game';
          break;
        case State.EnterMenu:
          this.exitButton.innerText = 'Enter menu';
          break;
      }
    }
  }

  SetExitCallback(callback: () => void, type: State) {
    this.state = type;
    this.exitButton.onclick = callback;
  }

  constructor() {
    super();
    this.container = this.AddDiv('tutorial-container');
    const tutorialPageContainer = this.AddRootDiv(
      this.container,
      'tutorial-page-container'
    );
    this.prevButton = this.AddButton(
      tutorialPageContainer,
      'prev-button',
      '<<',
      () => {
        if (this.pageIndex > 0) {
          this.SetPage(this.pageIndex - 1);
        }
      }
    );
    const tutorialPage = this.AddRootDiv(
      tutorialPageContainer,
      'tutorial-info-container'
    );
    this.pageNumberDiv = this.AddRootDiv(tutorialPage, 'tutorial-number');
    this.tutorialImage = this.AddImage('', 'tutorial-image', tutorialPage);
    this.tutorialText = this.AddRootDiv(tutorialPage, 'tutorial-text', '');
    this.nextButton = this.AddButton(
      tutorialPageContainer,
      'next-button',
      '>>',
      () => {
        if (this.pageIndex < PAGE_COUNT - 1) {
          this.SetPage(this.pageIndex + 1);
        }
      }
    );
    const exitContainer = this.AddRootDiv(
      this.container,
      'tutorial-exit-container'
    );
    this.exitButton = this.AddButton(
      exitContainer,
      'exit-button',
      'Skip Tutorial',
      () => {}
    );
    this.SetPage(0);
  }
}

function ImageSrc(index: number): string {
  return `images/page${index}.png`;
}

const TUTORIAL_TEXT = [
  'In Passwordle, you are trying to guess their password...',
  'before they guess your password.',
  "If a letter matches your opponent's password, it will turn green.",
  "If a letter is in your opponent's password, it will turn yellow.",
  "If a letter isn't in your opponent's password, it will turn grey.",
  "You and your opponent's guess will provide hints for you.",
  'And will provide hints for you...',
  'And your opponent!',
  'If a letter matches your password, it will turn red!',
  'If every letter in your opponents passsword is green, you win!',
  'If every letter of your password is red, you lose!',
  "Find your opponent's password while trying to avoid your own!",
];

const PAGE_COUNT = TUTORIAL_TEXT.length;
