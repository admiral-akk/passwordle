import {LobbyState} from '../../../public/PlayerState';
import {GenerateLobbyLink, LobbyId} from '../../LobbyId';
import {LobbyClientSocket} from '../../server/LobbyNetworkTypes';
import {FindingMatchState} from '../finding/FindingMatchState';
import {MatchState} from '../match/MatchState';
import {Modal} from '../Modal';

export class MenuState extends LobbyState {
  private modal: MenuModal = new MenuModal(
    () => this.CopyLobbyLinkToClipboard(),
    () => this.Matchmake()
  );

  protected Enter(): void {}
  public Exit(): Promise<void> {
    return this.modal.Exit();
  }

  protected Register(socket: LobbyClientSocket): void {
    socket.on('FindingMatch', () => {
      this.FindingMatch();
    });
    socket.on('MatchFound', (lobbyId: LobbyId) => {
      this.MatchFound(lobbyId);
    });
  }
  protected Deregister(socket: LobbyClientSocket): void {
    socket.removeAllListeners('FindingMatch');
    socket.removeAllListeners('MatchFound');
  }

  constructor(private lobbyId: LobbyId) {
    super();
  }

  CopyLobbyLinkToClipboard() {
    const url = GenerateLobbyLink(this.lobbyId);
    navigator.clipboard.writeText(url);
  }

  private Matchmake() {
    this.modal.EnterMatchmaking();
    this.socket!.emit('FindMatch');
  }

  FindingMatch() {
    setTimeout(() => this.SwitchState(new FindingMatchState()), 1500);
  }

  MatchFound(lobbyId: LobbyId) {
    this.SwitchState(new MatchState(lobbyId));
  }
}

class MenuModal extends Modal {
  private matchmakingButton: HTMLButtonElement;
  private copyLinkButton: HTMLButtonElement;

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

  CopyLinkPopup() {
    this.AddPopup(this.copyLinkButton, 'Link copied to clipboard!', 1500);
  }

  EnterMatchmaking() {
    this.matchmakingButton.disabled = true;
    this.matchmakingButton.innerText = 'Looking for match...';
  }
}
