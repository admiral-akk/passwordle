import {ServerSocket} from './NetworkTypes';
import {PlayerId} from './structs/PlayerId';

export class SocketManager {
  private sockets: Record<PlayerId, ServerSocket> = {};
  AddSocket(socket: ServerSocket) {
    this.sockets[socket.data.playerId!] = socket;
  }

  GetSockets(players: PlayerId[]): ServerSocket[] {
    return players.map(player => this.sockets[player]!);
  }
}
