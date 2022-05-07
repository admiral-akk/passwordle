import {Socket} from 'socket.io-client';
import {ClientToServerEvents, ServerToClientEvents} from '../NetworkTypes';
import {BaseState, BaseStateManager, ExitState} from '../utils/State';
import {GameState} from './game/GameState';
import {Lobby} from './lobby/LobbyState';
import {PlayerServerToClientEvents, Register} from './PlayerEvents';
import {StartState} from './start/StartState';

export enum PlayerStateEnum {
  Start,
  InLobby,
  InGame,
}

export class PlayerExitState extends ExitState<PlayerStateEnum> {}

export abstract class PlayerState extends BaseState<
  PlayerStateEnum,
  PlayerExitState
> {}

export class Player
  extends BaseStateManager<PlayerStateEnum, PlayerExitState>
  implements PlayerServerToClientEvents
{
  StartState(): BaseState<PlayerStateEnum, PlayerExitState> {
    return new StartState(this.socket);
  }

  constructor(
    private socket: Socket<ServerToClientEvents, ClientToServerEvents>
  ) {
    super();
    Register(this.socket, this);
  }

  GameStarted() {
    this.SetState(new GameState(this.socket));
  }

  OpponentDisconnected() {
    this.SetState(new StartState(this.socket));
  }

  GameOver() {
    this.SetState(new Lobby(this.socket));
  }
}
