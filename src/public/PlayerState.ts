import {ClientSocket} from './ClientNetworking';

export abstract class PlayerState {
  protected Exit(nextState: PlayerState) {
    this.SetState(nextState);
  }
  protected abstract Register(socket: ClientSocket): void;
  protected abstract Deregister(socket: ClientSocket): void;
  constructor(
    protected socket: ClientSocket,
    private SetState: (nextState: PlayerState) => void
  ) {
    this.Register(socket);
  }
}
