import {PlayerExitState, PlayerState, PlayerStateEnum} from '../Player';
import {LobbyServerSentEvents, LobbySocket, Register} from './LobbyEvents';

enum LobbyState {
  Menu,
  WaitingForMatch,
  MatchMade,
  GameOver,
}
export class Lobby extends PlayerState implements LobbyServerSentEvents {
  private state: LobbyState = LobbyState.Menu;

  Exit(nextState: PlayerStateEnum): PlayerExitState {
    return new PlayerExitState(this.State());
  }

  Enter(transfer: PlayerExitState): void {
    switch (transfer.previousState) {
      case PlayerStateEnum.Start:
        this.state = LobbyState.Menu;
        break;
      case PlayerStateEnum.InGame:
        this.state = LobbyState.GameOver;
        break;
      case PlayerStateEnum.InLobby:
        this.state = LobbyState.Menu;
        break;
    }
  }

  State(): PlayerStateEnum {
    return PlayerStateEnum.InLobby;
  }

  constructor(private socket: LobbySocket) {
    super();
    Register(socket, this);
  }

  LookingForMatch() {
    this.state = LobbyState.WaitingForMatch;
  }

  MatchFound() {
    this.state = LobbyState.MatchMade;
  }
}
