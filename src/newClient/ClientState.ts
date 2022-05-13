import {UpdatedAnswerKnowledge} from '../game/network/updates/Updates';
import {ToClientEvents} from '../network/NetworkTypes';
import {LobbyId} from '../structs/LobbyId';
import {Word} from '../structs/Word';

enum State {
  None,
  InLobby,
  InGame,
  InRematchMenu,
}

export class ClientState {
  private state: State = State.None;
}
