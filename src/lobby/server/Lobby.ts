import {PlayerId} from '../../PlayerId';
import {LobbyId} from '../LobbyId';

export class Lobby {
  constructor(public players: PlayerId[], public lobbyId: LobbyId) {}
}
