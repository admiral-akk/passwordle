import {LobbyId} from '../public/structs/LobbyId';
import {PlayerId} from '../public/structs/PlayerId';

export class LobbyState {
  public lobbyId: LobbyId;
  public players: PlayerId[];
  constructor(lobbyId: LobbyId) {
    this.lobbyId = lobbyId;
    this.players = [];
  }

  AddPlayer(playerId: PlayerId) {
    this.players.push(playerId);
  }
}
