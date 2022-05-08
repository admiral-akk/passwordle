import {ClientSocket} from '../ClientNetworking';
import {PlayerState} from '../Player';

export class StartState extends PlayerState {
  protected Register(socket: ClientSocket): void {}
  protected Deregister(socket: ClientSocket): void {}
}
