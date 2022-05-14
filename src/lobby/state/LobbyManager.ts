import {ClientSocket} from '../../client/ClientNetworking';
import {LobbyState} from '../../client/PlayerState';
import {LoadingState} from './loading/LoadingState';

export class LobbyManager {
  private state?: LobbyState;

  protected Register(socket: ClientSocket): void {
    socket.on('GameReady', () => {
      this.GameReady();
    });
  }
  protected Deregister(socket: ClientSocket): void {
    socket.removeAllListeners('GameReady');
  }

  constructor(private socket: ClientSocket) {
    this.Register(socket);
    socket.emit('ClientReady');
    this.state = new LoadingState();
    this.state.Initialize(this.socket!, (nextState: LobbyState) =>
      this.SetState(nextState)
    );
  }

  private SetState(nextState: LobbyState) {
    this.state = nextState;
  }

  GameReady() {
    // this.SwitchState(new ClientGame());
  }
}
