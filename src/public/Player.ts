import {ClientGame} from '../game/client/ClientGame';
import {NewLobbyManager} from '../lobby/client/LobbyManager';
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
    const lobby = new NewLobbyManager();
    lobby.Initialize(this.socket, (nextState: PlayerState) =>
      this.SetState(nextState)
    );
    const client = new ClientGame(() => lobby.ShowMenu());
    client.Initialize(this.socket, (nextState: PlayerState) =>
      this.SetState(nextState)
    );
  }

  SetState(nextState: PlayerState) {
    this.state = nextState;
  }
}
