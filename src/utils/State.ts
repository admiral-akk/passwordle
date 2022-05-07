export class ExitState<StateEnum> {
  constructor(public previousState: StateEnum) {}
}

export abstract class BaseState<
  StateEnumType,
  ExitStateType extends ExitState<StateEnumType>
> {
  abstract Enter(transfer: ExitStateType): void;
  abstract Exit(nextState: StateEnumType): ExitStateType;
  abstract State(): StateEnumType;
}

export abstract class BaseStateManager<
  StateEnumType,
  ExitStateType extends ExitState<StateEnumType>
> {
  private state: BaseState<StateEnumType, ExitStateType> = this.StartState();
  abstract StartState(): BaseState<StateEnumType, ExitStateType>;

  protected SetState(nextState: BaseState<StateEnumType, ExitStateType>) {
    const exitState = this.state.Exit(nextState.State());
    this.state = nextState;
    nextState.Enter(exitState);
  }
}
