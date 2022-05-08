import {ClientGame} from '../game/client/ClientGame';
import {ClientSocket, GetSocket} from './ClientNetworking';
import {PlayerState} from './PlayerState';
import {StartState} from './start/StartState';

export class Player {
  private socket: ClientSocket = GetSocket();
  private state: PlayerState = new StartState(
    this.socket,
    (nextState: PlayerState) => this.SetState(nextState)
  );
  constructor() {
    const client = new ClientGame(() => {});
    client.Initialize(this.socket, (nextState: PlayerState) =>
      this.SetState(nextState)
    );
  }

  SetState(nextState: PlayerState) {
    this.state = nextState;
  }
}
