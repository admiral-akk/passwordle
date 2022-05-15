import {ClientGame} from '../game/client/ClientGame';
import {LobbyManager} from '../lobby/state/LobbyManager';
import {EndGameSummary} from '../structs/EndGameState';
import {ClientSocket, GetSocket} from './ClientNetworking';

export class Player {
  private socket: ClientSocket = GetSocket();
  constructor() {
    this.socket.on('GameReady', () => this.game.StartGame());
  }
  private lobby: LobbyManager = new LobbyManager(this.socket);
  private game: ClientGame = new ClientGame(
    this.socket,
    (endGameState: EndGameSummary) => this.lobby.GameEnded(endGameState)
  );
}
