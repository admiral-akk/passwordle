import {LobbyServerSocket} from './LobbyServerSocket';

export class Lobby {
  id: string;
  players: LobbyServerSocket[];
  constructor(socket: LobbyServerSocket) {
    this.id = socket.id;
    this.players = [socket];
  }

  AddPlayer(player: LobbyServerSocket) {
    this.players.push(player);
  }
}
