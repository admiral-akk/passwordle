import {PlayerId} from '../../PlayerId';
import {LobbyId} from '../LobbyId';

export class Lobby {
  rematchRequested: PlayerId[] = [];
  constructor(public players: PlayerId[], public lobbyId: LobbyId) {}

  RequestRematch(playerId: PlayerId) {
    if (this.rematchRequested.indexOf(playerId) === -1) {
      this.rematchRequested.push(playerId);
    }
  }
}
