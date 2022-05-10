import {ClientSocket} from '../../public/ClientNetworking';
import {LobbyState, PlayerState} from '../../public/PlayerState';
import {ClientGame} from '../../game/client/ClientGame';
import {LoadingState} from './loading/LoadingState';
import {RematchState} from './rematch/RematchState';
import {GameOverState} from '../../game/model/PlayerBoard';

export class LobbyManager extends PlayerState {
  public Exit(): Promise<void> {
    if (this.state) {
      return this.state.Exit();
    } else {
      return Promise.resolve();
    }
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

  constructor(private endState: GameOverState = GameOverState.None) {
    super();
  }

  private SetState(nextState: LobbyState) {
    this.state = nextState;
  }

  protected Enter(): void {
    if (this.endState !== GameOverState.None) {
      this.state = new RematchState(this.endState);
    } else {
      this.state = new LoadingState();
    }
    this.state.Initialize(this.socket!, (nextState: LobbyState) =>
      this.SetState(nextState)
    );
  }

  GameReady() {
    this.SwitchState(new ClientGame());
  }
}
