import {ClientGame} from '../game/client/ClientGame';
import {UpdatedAnswerKnowledge} from '../game/network/Updates';
import {LobbyManager} from '../lobby/state/LobbyManager';
import {EndGameState, EndGameSummary} from '../structs/EndGameState';
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
