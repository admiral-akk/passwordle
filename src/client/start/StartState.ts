import {LobbyManager} from '../../lobby/state/LobbyManager';
import {ClientSocket} from '../ClientNetworking';
import {PlayerState} from '../PlayerState';
import {ToClientStartEvents} from '../../network/StartNetworkTypes';

export class StartState extends PlayerState implements ToClientStartEvents {
  protected Enter(): void {}
  public Exit(): Promise<void> {
    return Promise.resolve();
  }
  protected Register(socket: ClientSocket): void {
    socket.on('ServerReady', () => this.ServerReady());
  }

  protected Deregister(socket: ClientSocket): void {
    socket.removeAllListeners('ServerReady');
  }

  constructor(
    socket: ClientSocket,
    setState: (nextState: PlayerState) => void
  ) {
    super();
    this.Initialize(socket, setState);
    socket.emit('ClientReady');
  }

  ServerReady() {
    this.SwitchState(new LobbyManager());
  }
}
