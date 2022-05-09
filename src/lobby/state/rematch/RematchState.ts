import {LobbyState} from '../../../public/PlayerState';
import {LobbyId} from '../../LobbyId';
import {LobbyClientSocket} from '../../server/LobbyNetworkTypes';
import {MatchState} from '../match/MatchState';
import {MenuState} from '../menu/MenuState';
import {Modal} from '../Modal';

enum State {
  None,
  RematchDeclined,
  RematchRequested,
}

export class RematchState extends LobbyState {
  private modal: RematchModal = new RematchModal(
    () => this.RequestRematch(),
    () => this.ReturnToMenu()
  );

  protected Enter(): void {}
  public Exit(): Promise<void> {
    return this.modal.RematchExit(this.state);
  }

  private state: State = State.None;
  protected Register(socket: LobbyClientSocket): void {
    socket.on('EnterMenu', (lobbyId: LobbyId) => {
      this.state = State.RematchDeclined;
      this.EnterMenu(lobbyId);
    });
  }
  protected Deregister(socket: LobbyClientSocket): void {
    socket.removeAllListeners('EnterMenu');
  }

  constructor() {
    super();
  }

  private RequestRematch() {
    this.state = State.RematchRequested;
    this.socket?.emit('RequestRematch');
  }
  private ReturnToMenu() {
    this.state = State.RematchDeclined;
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
  RematchExit(state: State): Promise<void> {
    let exitPromise = Promise.resolve();
    switch (state) {
      default:
        break;
      case State.RematchDeclined:
        exitPromise = exitPromise.then(
          () => new Promise(resolve => resolve(this.RematchDeclined()))
        );
        break;
      case State.RematchRequested:
        exitPromise = exitPromise.then(
          () => new Promise(resolve => resolve(this.RematchAccepted()))
        );
        break;
    }
    return exitPromise.then(() => super.Exit());
  }

  private RematchDeclined() {
    this.AddDiv('rematch-text', 'Rematch declined, returning to menu.');
  }

  private RematchAccepted() {
    this.AddDiv('rematch-text', 'Rematch accepted. Good luck!');
  }

  constructor(requestRematch: () => void, returnToMenu: () => void) {
    super();
    this.AddButton('request-rematch', 'Request Rematch', requestRematch);
    this.AddButton('to-menu', 'Return to Menu', returnToMenu);
  }
}
