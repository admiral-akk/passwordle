import {ClientSocket} from '../ClientNetworking';
import {PlayerState} from '../PlayerState';

export class StartState extends PlayerState {
  protected Register(socket: ClientSocket): void {}
  protected Deregister(socket: ClientSocket): void {}

  constructor(
    socket: ClientSocket,
    setState: (nextState: PlayerState) => void
  ) {
    super();
    this.Initialize(socket, setState);
  }
}
