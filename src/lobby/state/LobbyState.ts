import {LobbyClientSocket} from '../../network/LobbyNetworkTypes';

abstract class State<SocketType> {
  protected socket: SocketType | null = null;
  private setState?: (nextState: State<SocketType>) => void;
  protected SwitchState(nextState: State<SocketType>) {
    this.DeregisterSocket();
    this.Exit().then(() => {
      nextState.Initialize(this.socket!, this.setState!);
      this.setState!(nextState);
    });
  }
  protected abstract Enter(): void;
  public abstract Exit(): Promise<void>;
  protected abstract Register(socket: SocketType): void;
  protected abstract Deregister(socket: SocketType): void;
  public DeregisterSocket() {
    this.Deregister(this.socket!);
  }
  constructor() {}
  public Initialize(
    socket: SocketType,
    setState: (nextState: State<SocketType>) => void
  ) {
    this.socket = socket;
    this.setState = setState;
    this.Register(socket);
    this.Enter();
  }
}

export abstract class LobbyState extends State<LobbyClientSocket> {}
