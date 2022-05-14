import {ClientGame} from '../game/client/ClientGame';
import {UpdatedAnswerKnowledge} from '../game/network/Updates';
import {LobbyManager} from '../lobby/state/LobbyManager';
import {ClientSocket, GetSocket} from './ClientNetworking';

export class Player {
  private socket: ClientSocket = GetSocket();
  constructor() {
    this.socket.on('GameReady', () => this.game.StartGame());
    this.socket.on(
      'UpdatedAnswerKnowledge',
      (update: UpdatedAnswerKnowledge) => {
        if (update.endGameState) {
          this.lobby.GameEnded(update.endGameState);
        }
      }
    );
  }
  private lobby: LobbyManager = new LobbyManager(this.socket);
  private game: ClientGame = new ClientGame(this.socket);
}
