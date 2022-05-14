import {AddPopup} from '../../../game/model/view/Animate';
import {LobbyState} from '../LobbyState';
import {GenerateLobbyLink, LobbyId} from '../../../structs/LobbyId';
import {LobbyClientSocket} from '../../../network/LobbyNetworkTypes';
import {Modal} from '../Modal';

export class MenuState extends LobbyState {
  private modal: MenuModal | null = null;

  protected Enter(): void {
    this.modal = new MenuModal(
      () => this.CopyLobbyLinkToClipboard(),
      () => this.Matchmake()
    );
  }
  public Exit(): Promise<void> {
    return this.modal!.Exit();
  }

  protected Register(socket: LobbyClientSocket): void {}
  protected Deregister(socket: LobbyClientSocket): void {}

  constructor(private lobbyId: LobbyId) {
    super();
  }

  CopyLobbyLinkToClipboard() {
    const url = GenerateLobbyLink(this.lobbyId);
    this.fallbackCopyTextToClipboard(url);
  }

  private Matchmake() {
    this.modal!.EnterMatchmaking();
    this.socket!.emit('FindMatch');
  }
  fallbackCopyTextToClipboard(text: string) {
    const textArea = document.createElement('textarea');
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      const msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
  }
}

class MenuModal extends Modal {
  private matchmakingButton: HTMLButtonElement;
  private copyLinkButton: HTMLButtonElement;
  private stateText: HTMLDivElement;

  public Exit(): Promise<void> {
    return Promise.resolve(this.EnteringMatch())
      .then(() => new Promise(resolve => setTimeout(resolve, 1000)))
      .then(() => super.Exit());
  }

  constructor(hostLobby: () => void, matchmake: () => void) {
    super();
    // this.AddDiv(
    //   'explain-game',
    //   `In Passwordle, each player has a different password.

    // The winner is the first to figure out their opponent's password.

    // However, each guess gives clues to both players. For example:

    // If your password is 'FLAME', and you guess 'FLEET', then your opponent will see that your password is 'FL___' and contains an 'E'.`
    // );
    const menuContainer = this.AddDiv('menu-container');
    this.stateText = this.AddRootDiv(
      menuContainer,
      'menu-state',
      'Waiting for opponent'
    );
    const buttons = this.AddRootDiv(menuContainer, 'menu-button-container');
    this.copyLinkButton = this.AddButton(
      buttons,
      'menu-button',
      'Invite Friend',
      () => {
        hostLobby();
        this.CopyLinkPopup();
      }
    );
    this.matchmakingButton = this.AddButton(
      buttons,
      'menu-button',
      'Find Game',
      () => matchmake()
    );
  }

  EnteringMatch() {
    this.stateText.innerText = 'Entering match. Good luck!';
  }

  CopyLinkPopup() {
    AddPopup(this.copyLinkButton, 'Link copied to clipboard!', 200, 'white');
  }

  EnterMatchmaking() {
    this.matchmakingButton.disabled = true;
    this.stateText.innerText = 'Looking for match...';
  }
}
