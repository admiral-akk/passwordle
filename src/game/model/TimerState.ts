import {ModelState} from './ModelState';
import {TimerView} from './view/TimerView';

const TIME_TILL_RANDOM_MILLIS = 30000;

enum State {
  None,
  NoGuesses,
  PlayerGuessed,
  OpponentGuessed,
  BothGuessed,
}

export class TimerState extends ModelState<TimerView> {
  private state: State = State.None;
  private timeLeft = TIME_TILL_RANDOM_MILLIS;
  private timeout: NodeJS.Timeout | null = null;
  private lastUpdate = 0;

  constructor(private hasView: boolean, private timeExhausted: () => void) {
    super(TimerView, hasView);
    this.SetState(State.NoGuesses);
  }
  Exit(): void {
    this.view?.Exit();
  }
  Reset(): void {
    this.ResetTimer();
  }

  LockedGuess() {
    switch (this.state) {
      case State.OpponentGuessed:
        this.SetState(State.BothGuessed);
        break;
      case State.NoGuesses:
        this.SetState(State.PlayerGuessed);
        break;
    }
  }

  OpponentSubmitted() {
    switch (this.state) {
      case State.PlayerGuessed:
        this.SetState(State.BothGuessed);
        break;
      case State.NoGuesses:
        this.SetState(State.OpponentGuessed);
        break;
    }
  }

  UpdateKnowledge() {
    this.SetState(State.NoGuesses);
  }

  private ResetTimer() {
    clearInterval(this.timeout!);
    this.timeLeft = TIME_TILL_RANDOM_MILLIS;
    this.view?.Reset();
  }

  private StartTimer() {
    this.lastUpdate = Date.now();
    this.timeout = setInterval(() => this.UpdateTimer(), 100);
  }

  private TimeExhausted() {
    clearInterval(this.timeout!);
    this.view?.TimeExhausted();
    this.timeExhausted();
  }

  private UpdateTimer() {
    if (this.timeLeft < 0) {
      this.TimeExhausted();
      return;
    }
    const updateTime = Date.now();
    this.timeLeft -= updateTime - this.lastUpdate;
    this.lastUpdate = updateTime;
    this.view?.UpdateTime(this.timeLeft);
  }

  private SetState(newState: State) {
    if (!this.hasView) {
      return;
    }
    if (this.state === State.OpponentGuessed) {
      this.ResetTimer();
    }
    this.state = newState;
    if (this.state === State.OpponentGuessed) {
      this.StartTimer();
    }
  }
}
