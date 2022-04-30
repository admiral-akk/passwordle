import {LobbyServerSocket} from './LobbyServerSocket';

export class LobbyServer {
  id: string;
  players: LobbyServerSocket[];
  ready: boolean[];
  constructor(socket: LobbyServerSocket) {
    this.id = socket.id;
    this.players = [socket];
    this.ready = [false];
  }

  PlayerJoins(player: LobbyServerSocket) {
    player.data.isReady = false;
    this.players.push(player);
  }

  AddPlayer(player: LobbyServerSocket) {
    this.players.push(player);
  }
}
