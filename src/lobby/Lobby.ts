import {LobbySocket} from './LobbySocket';

export class Lobby {
  players: LobbySocket[];
  constructor() {
    this.players = [];
  }
}
