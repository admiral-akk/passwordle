import {ClientSocket} from '../../public/ClientNetworking';
import {LobbyState, PlayerState} from '../../public/PlayerState';
import {ClientGame} from '../../game/client/ClientGame';
import {LoadingState} from '../state/loading/LoadingState';

export class LobbyManager extends PlayerState {
  public Exit(): void {
    this.state?.Exit();
  }
  private state: LobbyState | null = null;

  protected Register(socket: ClientSocket): void {
    socket.on('GameReady', () => {
      this.GameReady();
    });
  }
  protected Deregister(socket: ClientSocket): void {
    socket.removeAllListeners('GameReady');
  }

  constructor() {
    super();
  }

  private SetState(nextState: LobbyState) {
    this.state = nextState;
  }

  protected Enter(): void {
    this.state = new LoadingState(this.socket!, (nextState: LobbyState) =>
      this.SetState(nextState)
    );
  }

  GameReady() {
    this.SwitchState(new ClientGame());
  }
}
