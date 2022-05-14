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

  constructor(private socket: ClientSocket) {
    this.Register(socket);
    this.EnterLobby(new LoadingState());
    this.socket.emit('ClientReady');
  }

  EnterLobby(state: LobbyState) {
    this.state = state;
    this.state.Initialize(
      this.socket!,
      (nextState: LobbyState) => (this.state = nextState)
    );
  }

  GameReady() {
    this.state?.Exit();
    this.state = undefined;
    // this.SwitchState(new ClientGame());
  }
}
