import {GameOverState} from '../../../game/model/PlayerBoard';
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

  constructor(private endState: GameOverState) {
    super();
  }
  private modal: RematchModal = new RematchModal(
    () => this.RequestRematch(),
    () => this.ReturnToMenu(),
    this.endState
  );

  private RequestRematch() {
    this.state = State.RematchRequested;
    this.socket?.emit('RequestRematch');
  }
  private ReturnToMenu() {
    this.state = State.RematchDeclined;
    this.socket?.emit('DeclineRematch');
  }

  EnterMenu(lobbyId: LobbyId) {
    this.SwitchState(new MenuState(lobbyId));
  }
}

class RematchModal extends Modal {
  RematchExit(state: State): Promise<void> {
    return new Promise(resolve => {
      if (state === State.RematchDeclined) {
        resolve(this.RematchDeclined());
      } else {
        resolve(this.RematchAccepted());
      }
    })
      .then(() => new Promise(resolve => setTimeout(resolve, 1500)))
      .then(() => super.Exit());
  }

  private RematchDeclined() {
    this.AddDiv('rematch-text', 'Rematch declined, returning to menu.');
  }

  private RematchAccepted() {
    this.AddDiv('rematch-text', 'Rematch accepted. Good luck!');
  }

  constructor(
    requestRematch: () => void,
    returnToMenu: () => void,
    endState: GameOverState
  ) {
    super();
    this.AddDiv(
      'explain-game',
      `In Passwordle, each player has a different password.

    The winner is the first to figure out their opponent's password.
    
    However, each guess gives clues to both players. For example:
    
    If your password is 'FLAME', and you guess 'FLEET', then your opponent will see that your password is 'FL___' and contains an 'E'.`
    );
    this.AddButton('request-rematch', 'Request Rematch', requestRematch);
    this.AddButton('to-menu', 'Return to Menu', returnToMenu);
    let text: string;
    switch (endState) {
      default:
        text = '';
        break;
      case GameOverState.Loss:
        text = 'You lost!';
        break;
      case GameOverState.Win:
        text = 'You won!';
        break;
      case GameOverState.Tie:
        text = 'You tied!';
        break;
    }
    this.AddDiv('match-outcome', text);
  }
}
