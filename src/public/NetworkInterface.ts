import {ClientManager} from './ClientManager';
import {SubmitGuessEvent} from './Events';
import {FetchLobbyId} from './structs/LobbyId';

export class NetworkInterface {
  client: ClientManager;
  constructor() {
    this.client = new ClientManager();
    this.RegisterListeners();
  }

  private RegisterListeners() {
    document.addEventListener(SubmitGuessEvent.name, e => {
      const event = e as SubmitGuessEvent;
      this.client.SubmitMove(event.detail);
    });
  }

  Connect() {
    const lobbyId = FetchLobbyId();
    if (lobbyId === null) {
      this.client.StartLobby();
    } else {
      this.client.JoinLobby(lobbyId!);
    }
  }
}
