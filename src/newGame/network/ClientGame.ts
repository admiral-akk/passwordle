import {GameClientSocket} from '../../game/client/GameNetworkEvents';
import {ClientBoard} from '../model/ClientBoard';

export class ClientGame {
  private board: ClientBoard = new ClientBoard();
  constructor(private socket: GameClientSocket) {}
}
