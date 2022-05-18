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
  private timeout?: NodeJS.Timeout;
  private lastUpdate = 0;

  constructor(view?: TimerView, private timeExhausted?: () => void) {
    super(view);
    this.SetState(State.NoGuesses);
  }
  Exit(): void {
    this.view?.Exit();
  }
  Reset(): void {
    this.ResetTimer();
  }

  Stop() {
    if (this.timeout) {
      clearTimeout(this.timeout!);
      this.timeout = undefined;
    }
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
    this.Stop();
    this.timeLeft = TIME_TILL_RANDOM_MILLIS;
    this.view?.Reset();
  }

  private StartTimer() {
    this.lastUpdate = Date.now();
    this.view?.StartTimer(TIME_TILL_RANDOM_MILLIS);
    this.timeout = setInterval(() => this.UpdateTimer(), 100);
  }

  private TimeExhausted() {
    this.Stop();
    this.view?.TimeExhausted();
    if (this.timeExhausted) {
      this.timeExhausted();
    }
  }

  private UpdateTimer() {
    if (this.timeLeft <= 0) {
      this.TimeExhausted();
      return;
    }
    const updateTime = Date.now();
    this.timeLeft -= updateTime - this.lastUpdate;
    this.lastUpdate = updateTime;
    this.view?.UpdateTime(this.timeLeft);
  }

  private SetState(newState: State) {
    if (!this.view) {
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
