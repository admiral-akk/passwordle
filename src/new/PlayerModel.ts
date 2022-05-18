import {LobbyCommand} from './lobby/LobbyCommand';
import {LobbyModel} from './lobby/LobbyModel';

export class PlayerModel {
  constructor(public lobby: LobbyModel) {}
  Handle(lobbyCommand: LobbyCommand) {
    this.lobby.Input(lobbyCommand);
  }
}
