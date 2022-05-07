import {ExitState, PlayerState, PlayerStateEnum} from './Player';

export class StartState implements PlayerState {
  Enter(prevState: ExitState): void {}
  Exit(): ExitState {
    return new ExitState(PlayerStateEnum.Start);
  }
}
