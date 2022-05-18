import {InputManager} from './input/InputManager';
import {Word} from '../../structs/Word';
import {GameState} from '../model/GameState';
import {
  RegisterGameClient,
  DeregisterGameClient,
} from '../../network/GameNetworkTypes';
import {AddedChar, UpdatedAnswerKnowledge} from '../network/Updates';
import {ClientSocket} from '../../client/ClientNetworking';
import {EndGameSummary} from '../../structs/EndGameState';
import {
  GameActionEmitter,
  GameValidator,
} from '../../server/game/GameValidator';
import {GameUpdater} from '../../server/game/GameUpdater';

enum State {
  None,
  SubmissionOpen,
  EnteringRandomGuess,
}

export class ClientGame extends GameState {
  private validator: GameValidator;
  private updater: GameUpdater;
  private clientState: State = State.None;

  StartGame() {
    this.Reset();
    this.socket!.emit('GameClientReady');
  }

  constructor(
    private socket: ClientSocket,
    private gameEnd: (endGame: EndGameSummary) => void
  ) {
    super(
      document.getElementById('game-board')!,
      (key: string) => this.Input(key),
      (guess: Word, currentGuessLength: number) =>
        this.SubmitRandomGuess(guess, currentGuessLength)
    );
    new InputManager(
      (char: string) => this.Input(char),
      () => this.Input('DEL'),
      () => this.Input('ENT')
    );
    this.validator = new GameValidator(this, new GameActionEmitter(socket));
    this.updater = new GameUpdater([this]);
    RegisterGameClient(socket, this.updater);
    socket.on('SetSecret', () => (this.clientState = State.SubmissionOpen));
    socket.on('OpponentDisconnected', (endGameState: EndGameSummary) =>
      this.OpponentDisconnected(endGameState)
    );
  }

  private SubmitRandomGuess(guess: Word, currentGuessLength: number) {
    this.clientState = State.EnteringRandomGuess;
    let animations: Promise<void> = new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
    for (let i = 0; i < currentGuessLength; i++) {
      animations = animations
        .then(() => {
          this.Input('DEL', true);
          return Promise.resolve();
        })
        .then(() => new Promise(resolve => setTimeout(resolve, 300)));
    }
    for (let i = 0; i < guess.length; i++) {
      animations = animations
        .then(() => {
          this.Input(guess[i], true);
          return Promise.resolve();
        })
        .then(() => new Promise(resolve => setTimeout(resolve, 300)));
    }
    animations.then(() => {
      this.Input('ENT', true);
      return Promise.resolve();
    });
  }

  private Input(key: string, overrideState = false) {
    if (this.clientState !== State.SubmissionOpen && !overrideState) {
      return;
    }
    if (key.length === 1) {
      this.validator.AddChar(new AddedChar(key));
    } else if (key === 'ENT') {
      this.validator.LockGuess();
    } else {
      this.validator.Delete();
    }
  }

  OpponentDisconnected(endGameSummary: EndGameSummary) {
    this.EndGame(endGameSummary);
  }

  EndGame(endGameSummary: EndGameSummary): Promise<void> {
    return new Promise<void>(resolve => {
      this.gameEnd(endGameSummary);
      resolve();
    });
  }

  UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge): Promise<void> {
    return Promise.resolve()
      .then(() => super.UpdatedAnswerKnowledge(update))
      .then(() => {
        const gameOver = this.IsGameOver();
        if (!gameOver) {
          this.clientState = State.SubmissionOpen;
          return Promise.resolve();
        }
        return this.EndGame(update.endGameState!);
      });
  }
}
