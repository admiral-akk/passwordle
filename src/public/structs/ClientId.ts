import {LobbyId} from './LobbyId';
import {PlayerId} from './PlayerId';

export class ClientId {
  public lobbyId: LobbyId;
  public playerId: PlayerId;

  constructor(lobbyId: LobbyId, playerId: PlayerId) {
    this.lobbyId = lobbyId;
    this.playerId = playerId;
  }
}
