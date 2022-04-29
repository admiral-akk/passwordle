import {LobbyServerSocket} from './LobbyServerSocket';

export class Lobby {
  players: LobbyServerSocket[];
  constructor() {
    this.players = [];
  }
}
