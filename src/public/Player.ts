import {ClientGame} from '../game/client/ClientGame';
import {NewLobbyManager} from '../lobby/client/LobbyManager';
import {ClientSocket, GetSocket} from './ClientNetworking';
import {StartState} from './StartState';

export enum PlayerStateEnum {
  Start,
  Lobby,
  Game,
}

export class ExitState {
  constructor(public prevState: PlayerStateEnum) {}
}

export interface PlayerState {
  Enter(prevState: ExitState): void;
  Exit(): ExitState;
}

export class Player {
  private state: PlayerState = new StartState();
  private socket: ClientSocket = GetSocket();
  constructor() {
    const lobby = new NewLobbyManager(this.socket);
    new ClientGame(this.socket, () => lobby.ShowMenu());
  }
}
