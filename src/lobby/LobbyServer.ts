import {LobbyServerSocket} from './LobbyServerSocket';

export class LobbyServer {
  players: LobbyServerSocket[];
  constructor(socket: LobbyServerSocket[]) {
    this.players = socket;
  }

  PlayerJoins(player: LobbyServerSocket) {
    player.data.isReady = false;
    this.players.push(player);
  }

  AddPlayer(player: LobbyServerSocket) {
    this.players.push(player);
  }

  Ready() {
    return this.players.filter(p => !p.data.isReady).length === 0;
  }
}
