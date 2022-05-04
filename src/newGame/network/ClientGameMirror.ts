import {GameServerSocket} from '../../game/GameServerSocket';
import {ClientBoard} from '../model/ClientBoard';

export class ClientGameMirror {
  private board: ClientBoard = new ClientBoard();
  constructor(private socket: GameServerSocket) {}
}
