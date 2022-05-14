import {ClientSocket} from '../../client/ClientNetworking';
import {LobbyState} from './LobbyState';
import {LoadingState} from './loading/LoadingState';
import {EndGameSummary} from '../../structs/EndGameState';
import {RematchState} from './rematch/RematchState';

export class LobbyManager {
  private state?: LobbyState;

  protected Register(socket: ClientSocket): void {
    socket.on('GameReady', () => {
      this.GameReady();
    });
  }

  constructor(private socket: ClientSocket) {
    this.Register(socket);
    this.EnterState(new LoadingState());
  }

  private EnterState(state: LobbyState) {
    this.state = state;
    this.state.Initialize(
      this.socket!,
      (nextState: LobbyState) => (this.state = nextState)
    );
  }

  GameEnded(summary: EndGameSummary) {
    this.EnterState(new RematchState(summary));
  }

  GameReady() {
    this.state?.Exit();
    this.state = undefined;
    // this.SwitchState(new ClientGame());
  }
}
