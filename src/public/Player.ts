import {ClientSocket, GetSocket} from './ClientNetworking';
import {PlayerState} from './PlayerState';
import {StartState} from './start/StartState';

export class Player {
  private socket: ClientSocket = GetSocket();
  private state: PlayerState = new StartState(
    this.socket,
    (nextState: PlayerState) => this.SetState(nextState)
  );
  constructor() {}

  SetState(nextState: PlayerState) {
    this.state = nextState;
  }
}
