import {LobbyServerWrapper} from '../CommandNetwork';
import {LobbyModel} from './LobbyModel';
import {LobbyUpdate} from './LobbyUpdate';

export class ServerLobbyModel extends LobbyModel {
  protected Apply(update: LobbyUpdate): void {
    super.Apply(update);
  }
  constructor(private wrapper: LobbyServerWrapper) {
    super();
  }
}
