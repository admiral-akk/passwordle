import {ClientGame} from '../game/client/ClientGame';
import {NewLobbyManager} from '../lobby/client/LobbyManager';
import {ClientSocket, GetSocket} from './ClientNetworking';

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
    console.log('registering socket');
    this.Register(socket);
    console.log('registering socket');
  }
}

export class Player {
  private socket: ClientSocket = GetSocket();
  private state: PlayerState | null = null;
  constructor() {
    const lobby = new NewLobbyManager(this.socket, (nextState: PlayerState) =>
      this.SetState(nextState)
    );
    new ClientGame(
      this.socket,
      (nextState: PlayerState) => this.SetState(nextState),
      () => lobby.ShowMenu()
    );
  }

  SetState(nextState: PlayerState) {
    this.state = nextState;
  }
}
