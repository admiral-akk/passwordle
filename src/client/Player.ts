import {ClientGame} from '../game/client/ClientGame';
import {LobbyManager} from '../lobby/state/LobbyManager';
import {ClientSocket, GetSocket} from './ClientNetworking';

export class Player {
  private socket: ClientSocket = GetSocket();
  constructor() {}
  private lobby: LobbyManager = new LobbyManager(this.socket);
  private game: ClientGame = new ClientGame(this.socket);
}
