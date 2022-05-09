import {AddPopup} from '../../../game/model/view/Popup';
import {LobbyState} from '../../../public/PlayerState';
import {GenerateLobbyLink, LobbyId} from '../../LobbyId';
import {LobbyClientSocket} from '../../server/LobbyNetworkTypes';
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
    navigator.clipboard.writeText(url);
  }

  private Matchmake() {
    this.modal!.EnterMatchmaking();
    this.socket!.emit('FindMatch');
  }
}

class MenuModal extends Modal {
  private matchmakingButton: HTMLButtonElement;
  private copyLinkButton: HTMLButtonElement;

  public Exit(): Promise<void> {
    return Promise.resolve(this.EnteringMatch())
      .then(() => new Promise(resolve => setTimeout(resolve, 1000)))
      .then(() => super.Exit());
  }

  constructor(hostLobby: () => void, matchmake: () => void) {
    super();
    this.copyLinkButton = this.AddButton(
      'private-game',
      'Copy Link to Clipboard',
      () => {
        hostLobby();
        this.CopyLinkPopup();
      }
    );
    this.matchmakingButton = this.AddButton(
      'public-game',
      'Join Random Game',
      () => matchmake()
    );
  }

  EnteringMatch() {
    this.AddDiv('entering-match', 'Entering match. Good luck!');
  }

  CopyLinkPopup() {
    AddPopup(this.copyLinkButton, 'Link copied to clipboard!', 1.5);
  }

  EnterMatchmaking() {
    this.matchmakingButton.disabled = true;
    this.matchmakingButton.innerText = 'Looking for match...';
  }
}
