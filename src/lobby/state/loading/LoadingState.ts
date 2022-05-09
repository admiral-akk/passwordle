import {LobbyState} from '../../../public/PlayerState';
import {FindLobbyIdInURL, LobbyId} from '../../LobbyId';
import {LobbyClientSocket} from '../../server/LobbyNetworkTypes';
import {MatchState} from '../match/MatchState';
import {MenuState} from '../menu/MenuState';
import {Modal} from '../Modal';

enum State {
  None,
  LoadingMenu,
  JoiningLobby,
}

export class LoadingState extends LobbyState {
  private modal: LoadingModal = new LoadingModal();
  private state: State = State.None;

  protected Enter(): void {
    const lobbyId = FindLobbyIdInURL();
    if (lobbyId) {
      this.state = State.JoiningLobby;
      this.JoinLobby(lobbyId!);
    } else {
      this.state = State.LoadingMenu;
      this.RequestLobbyId();
    }
  }
  public Exit(): void {
    this.modal.Exit();
  }
  protected Register(socket: LobbyClientSocket): void {
    socket.on('EnterMenu', (lobbyId: LobbyId) => {
      this.EnterMenu(lobbyId);
    });
    socket.on('MatchFound', (lobbyId: LobbyId) => {
      this.MatchFound(lobbyId);
    });
  }
  protected Deregister(socket: LobbyClientSocket): void {
    socket.removeAllListeners('EnterMenu');
    socket.removeAllListeners('MatchFound');
  }

  constructor() {
    super();
  }

  EnterMenu(lobbyId: LobbyId) {
    switch (this.state) {
      case State.JoiningLobby:
        this.modal.LobbyNotFound();
        break;
      case State.LoadingMenu:
        break;
    }
    setTimeout(() => this.SwitchState(new MenuState(lobbyId)), 1500);
  }

  MatchFound(lobbyId: LobbyId) {
    this.modal.LobbyFound();
    this.SwitchState(new MatchState(lobbyId));
  }

  RequestLobbyId() {
    this.modal.LoadingMenu();
    this.socket?.emit('RequestLobbyId');
  }

  JoinLobby(lobbyId: LobbyId) {
    this.modal.JoiningLobby();
    this.socket?.emit('JoinLobby', lobbyId);
  }
}

class LoadingModal extends Modal {
  private text: HTMLDivElement;

  constructor() {
    super();
    this.text = this.AddDiv('loading', 'Loading...');
  }

  public LoadingMenu() {
    this.text.innerText = 'Loading main menu...';
  }

  public JoiningLobby() {
    this.text.innerText = 'Trying to join existing lobby...';
  }

  public LobbyNotFound() {
    this.text.innerText = 'Lobby not found. Entering menu...';
  }

  public LobbyFound() {
    this.text.innerText = 'Lobby found. Entering menu...';
  }
}
