import {LobbyState} from '../../../client/PlayerState';
import {FindLobbyIdInURL, LobbyId} from '../../../structs/LobbyId';
import {LobbyClientSocket} from '../../../network/LobbyNetworkTypes';
import {MenuState} from '../menu/MenuState';
import {Modal} from '../Modal';

enum State {
  None,
  LoadingMenu,
  JoiningLobby,
  LobbyNotFound,
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

  public Exit(): Promise<void> {
    return this.modal.LoadingExit(this.state);
  }

  protected Register(socket: LobbyClientSocket): void {
    socket.on('EnterMenu', (lobbyId: LobbyId) => {
      if (this.state === State.JoiningLobby) {
        this.state = State.LobbyNotFound;
      }
      this.EnterMenu(lobbyId);
    });
  }
  protected Deregister(socket: LobbyClientSocket): void {
    socket.removeAllListeners('EnterMenu');
  }

  constructor() {
    super();
  }

  EnterMenu(lobbyId: LobbyId) {
    this.SwitchState(new MenuState(lobbyId));
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

  LoadingExit(state: State): Promise<void> {
    return new Promise(resolve => {
      switch (state) {
        case State.LobbyNotFound:
          this.LobbyNotFound();
          break;
      }
      setTimeout(resolve, 1500);
    }).then(() => super.Exit());
  }

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
