import {LobbyState} from '../../../public/PlayerState';
import {LobbyId} from '../../LobbyId';
import {LobbyClientSocket} from '../../server/LobbyNetworkTypes';
import {MatchState} from '../match/MatchState';
import {MenuState} from '../menu/MenuState';
import {Modal} from '../Modal';

export class RematchState extends LobbyState {
  private modal: RematchModal = new RematchModal(
    () => this.RequestRematch(),
    () => this.ReturnToMenu()
  );

  protected Enter(): void {}
  public Exit(): void {
    this.modal.Exit();
  }

  protected Register(socket: LobbyClientSocket): void {
    socket.on('MatchFound', (lobbyId: LobbyId) => {
      this.MatchFound(lobbyId);
    });
    socket.on('EnterMenu', (lobbyId: LobbyId) => {
      this.EnterMenu(lobbyId);
    });
  }
  protected Deregister(socket: LobbyClientSocket): void {
    socket.removeAllListeners('MatchFound');
    socket.removeAllListeners('EnterMenu');
  }

  constructor() {
    super();
  }

  private RequestRematch() {
    this.socket?.emit('RequestRematch');
  }
  private ReturnToMenu() {
    this.socket?.emit('DeclineRematch');
  }

  MatchFound(lobbyId: LobbyId) {
    this.SwitchState(new MatchState(lobbyId));
  }

  EnterMenu(lobbyId: LobbyId) {
    this.SwitchState(new MenuState(lobbyId));
  }
}

class RematchModal extends Modal {
  constructor(requestRematch: () => void, returnToMenu: () => void) {
    super();
    this.AddButton('request-rematch', 'Request Rematch', requestRematch);
    this.AddButton('to-menu', 'Return to Menu', returnToMenu);
  }
}
