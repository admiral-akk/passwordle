import {LobbyClientSocket} from '../../../network/LobbyNetworkTypes';
import {LobbyState} from '../LobbyState';
import {Modal} from '../Modal';

export class TutorialState extends LobbyState {
  private modal: TutorialModal = new TutorialModal();
  protected Enter(): void {}
  public Exit(): Promise<void> {
    return this.modal.Exit();
  }
  protected Register(socket: LobbyClientSocket): void {}
  protected Deregister(socket: LobbyClientSocket): void {}
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

  private SetPage(index: number) {
    this.pageIndex = index;
    this.pageNumberDiv.innerText = `${this.pageIndex + 1}/${PAGE_COUNT}`;
    this.tutorialText.innerText = TUTORIAL_TEXT[this.pageIndex];
    this.tutorialImage.src = ImageSrc(this.pageIndex);
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
      'Exit',
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
  'Before they guess your password.',
  "If a guess matches a letter of your opponent's password in the correct position, the letter is revealed and it turns green.",
  "If a guess shares a letter with your opponent's password, but isn't in the correct place, it will turn yellow.",
  "If a letter isn't in your opponent's password, it will turn grey.",
  "You and your opponent's guess will be revealed at the same time...",
  'And will provide hints for you...',
  'And your opponent!',
  'If a guess matches the position of one of your letters, it will turn red!',
  'If every letter in your opponents passsword is revealed, you win!',
  'If every letter of your password is marked red, you lose!',
  "Try to guess your opponent's password while avoiding your own!",
];

const PAGE_COUNT = TUTORIAL_TEXT.length;
