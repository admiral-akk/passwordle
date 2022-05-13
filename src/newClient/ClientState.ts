import {GameState} from './GameState';
import {LobbyState} from './LobbyState';
import {RematchState} from './RematchState';
import {StartState} from './StartState';

enum State {
  None,
  InLobby,
  InGame,
  InRematchMenu,
}

export class ClientState {
  private state: State = State.None;
  private game: GameState = new GameState();
  private lobby: LobbyState = new LobbyState();
  private rematch: RematchState = new RematchState();
  private start: StartState = new StartState();
}
