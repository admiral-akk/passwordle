import {LobbyState} from '../../../public/PlayerState';
import {FindLobbyIdInURL, LobbyId} from '../../LobbyId';
import {LobbyClientSocket} from '../../server/LobbyNetworkTypes';
import {MatchState} from '../match/MatchState';
import {MenuState} from '../menu/MenuState';
import {Modal} from '../Modal';

export class LoadingState extends LobbyState {
  private modal: LoadingModal = new LoadingModal();

  protected Enter(): void {
    const lobbyId = FindLobbyIdInURL();
    if (lobbyId) {
      this.JoinLobby(lobbyId!);
    } else {
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
    this.SwitchState(new MenuState(lobbyId));
  }

  MatchFound(lobbyId: LobbyId) {
    this.SwitchState(new MatchState(lobbyId));
  }

  RequestLobbyId() {
    this.socket?.emit('RequestLobbyId');
  }

  JoinLobby(lobbyId: LobbyId) {
    this.socket?.emit('JoinLobby', lobbyId);
  }
}

class LoadingModal extends Modal {
  constructor() {
    super();
    this.AddDiv('loading', 'Loading...');
  }
}
