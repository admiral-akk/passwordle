import {ClientSocket} from '../ClientNetworking';
import {PlayerState} from '../PlayerState';

export class StartState extends PlayerState {
  protected Register(socket: ClientSocket): void {}
  protected Deregister(socket: ClientSocket): void {}
}
