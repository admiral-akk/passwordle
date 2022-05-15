import {PlayerId} from '../../structs/PlayerId';
import {LobbyId} from '../../structs/LobbyId';

export class Lobby {
  rematchRequested: PlayerId[] = [];
  constructor(public players: PlayerId[], public lobbyId: LobbyId) {}

  RequestRematch(playerId: PlayerId) {
    if (this.rematchRequested.indexOf(playerId) === -1) {
      this.rematchRequested.push(playerId);
    }
  }

  Opponent(playerId: PlayerId) {
    if (this.players[0] === playerId && this.players.length > 1) {
      return this.players[1];
    }
    return this.players[0];
  }
}
