enum State {
  None,
  InLobby,
  InGame,
  InRematchMenu,
}

export class ClientState {
  private state: State = State.None;
}
