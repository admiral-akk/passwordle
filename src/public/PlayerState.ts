import {ClientSocket} from './ClientNetworking';

export abstract class PlayerState {
  protected socket: ClientSocket | null = null;
  private setState: ((nextState: PlayerState) => void) | null = null;
  protected Exit(nextState: PlayerState) {
    this.Deregister(this.socket!);
    nextState.Initialize(this.socket!, this.setState!);
    this.setState!(nextState);
  }
  protected abstract Enter(): void;
  protected abstract Register(socket: ClientSocket): void;
  protected abstract Deregister(socket: ClientSocket): void;
  constructor() {}
  public Initialize(
    socket: ClientSocket,
    setState: (nextState: PlayerState) => void
  ) {
    this.socket = socket;
    this.setState = setState;
    this.Register(socket);
    this.Enter();
  }
}
