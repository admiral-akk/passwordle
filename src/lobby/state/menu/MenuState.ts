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
    super('menu');
    this.stateText = this.AddDiv('menu-state', 'Create Match');
    const buttons = this.AddDiv('menu-button-container');
    this.copyLinkButton = this.AddButton(
      'menu-button',
      'Invite Friend',
      () => {
        hostLobby();
        this.CopyLinkPopup();
      },
      buttons
    );
    this.matchmakingButton = this.AddButton(
      'menu-button',
      'Find Game',
      () => matchmake(),
      buttons
    );
  }

  EnteringMatch() {
    this.stateText.innerText = 'Entering match. Good luck!';
  }

  CopyLinkPopup() {
    AddPopup(this.copyLinkButton, 'Link copied to clipboard!', 220, 'white');
  }

  EnterMatchmaking() {
    this.matchmakingButton.disabled = true;
    this.stateText.innerText = 'Looking for match...';
  }
}
