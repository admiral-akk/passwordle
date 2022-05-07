import {PlayerExitState, PlayerState, PlayerStateEnum} from '../Player';
import {Register, StartSocket} from './StartEvents';

interface StartEvents {}

export class StartState extends PlayerState {
  Exit(nextState: PlayerStateEnum): PlayerExitState {
    return new PlayerExitState(this.State());
  }
  Enter(transfer: PlayerExitState): void {}
  State(): PlayerStateEnum {
    return PlayerStateEnum.Start;
  }
  constructor(private socket: StartSocket) {
    super();
    Register(socket, this);
  }
}
