import {ClientSocket} from '../../client/ClientNetworking';
import {LobbyState} from './LobbyState';
import {EndGameSummary} from '../../structs/EndGameState';
import {TutorialState} from './tutorial/TutorialState';
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
    this.EnterState(new TutorialState());
  }

  private EnterState(state: LobbyState) {
    state.Initialize(
      this.socket!,
      (nextState: LobbyState) => (this.state = nextState)
    );
    this.state = state;
  }

  GameEnded(summary: EndGameSummary) {
    this.EnterState(new RematchState(summary));
  }

  GameReady() {
    this.state?.DeregisterSocket();
    this.state?.Exit();
    this.state = undefined;
  }
}
