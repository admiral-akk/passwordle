import {Password} from '../../utils/structs/Password';
import {PlayerExitState, PlayerState, PlayerStateEnum} from '../Player';
import {GameServerSentEvents, GameSocket, Register} from './GameEvents';
import {GameModel} from './model/GameModel';

enum GameStateEnum {
  Start,
  ShowingPasswords,
  EnteringGuesses,
  OpponentGuessLocked,
  YourGuessLocked,
  BothGuessesLocked,
  AnnotatingGuesses,
  GameOver,
}

export class GameState extends PlayerState implements GameServerSentEvents {
  private state: GameStateEnum = GameStateEnum.Start;
  private model: GameModel = new GameModel();

  Exit(nextState: PlayerStateEnum): PlayerExitState {
    return new PlayerExitState(this.State());
  }
  Enter(transfer: PlayerExitState): void {}
  State(): PlayerStateEnum {
    return PlayerStateEnum.InGame;
  }

  constructor(private socket: GameSocket) {
    super();
    Register(socket, this);
  }

  OpponentLockedGuess(): void {
    if (this.state === GameStateEnum.YourGuessLocked) {
      this.state = GameStateEnum.BothGuessesLocked;
    } else {
      this.state = GameStateEnum.OpponentGuessLocked;
    }
  }

  GetYourPassword(password: Password): void {
    this.state = GameStateEnum.ShowingPasswords;
    const animationComplete = () => {
      this.state = GameStateEnum.EnteringGuesses;
    };
  }
}
