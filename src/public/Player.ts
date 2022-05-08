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
