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
  public Exit(): void {
    this.modal.Exit();
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
    this.socket?.emit('FindMatch');
  }

  FindingMatch() {
    this.SwitchState(new FindingMatchState());
  }

  MatchFound(lobbyId: LobbyId) {
    this.SwitchState(new MatchState(lobbyId));
  }
}

class MenuModal extends Modal {
  constructor(hostLobby: () => void, matchmake: () => void) {
    super();
    this.AddButton('private-game', 'Copy Link to Clipboard', hostLobby);
    this.AddButton('public-game', 'Join Random Game', matchmake);
  }
}
