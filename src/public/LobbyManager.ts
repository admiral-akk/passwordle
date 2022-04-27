export class LobbyManager {
  private state: LobbyState;
  constructor() {
    this.state = LobbyState.None;
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has(LOBBY_ID_URL_NAME)) {
      this.state = LobbyState.JoiningExistingLobby;
    } else {
      this.state = LobbyState.RequestingLobby;
    }
  }
}

const LOBBY_ID_URL_NAME = 'lobbyId';

enum LobbyState {
  None,
  RequestingLobby,
  WaitingInLobby,
  JoiningExistingLobby,
  EnteringGame,
}
