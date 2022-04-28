import {LobbyView} from './LobbyView';

export class LobbyManager {
  private view: LobbyView;
  constructor() {
    this.view = new LobbyView(this.CreateLobby, this.Matchmake);
  }

  private CreateLobby() {}
  private Matchmake() {}
}
