import {Word} from '../structs/Word';
import {
  GameClientToServerEvents,
  GameServerToClientEvents,
} from '../network/GameNetworkTypes';
import {AddedChar, UpdatedAnswerKnowledge} from '../network/updates/Updates';
import {YourBoardState} from './YourBoardState';
import {YourPasswordState} from './YourPasswordState';
import {OpponentBoardState} from './OpponentBoardState';
import {OpponentPasswordState} from './OpponentPasswordState';
import {LetterAnimation} from './view/struct/Animation';

export class PlayerBoard
  implements GameClientToServerEvents, GameServerToClientEvents
{
  private Reset() {
    this.yourBoard.Reset();
    this.yourPassword.Reset();
    this.opponentBoard.Reset();
    this.opponentPassword.Reset();
  }
  Exit() {
    this.yourBoard.Exit();
    this.yourPassword.Exit();
    this.opponentBoard.Exit();
    this.opponentPassword.Exit();
  }

  constructor(private hasView: boolean = false) {}
  GameClientReady() {}

  private yourBoard: YourBoardState = new YourBoardState(this.hasView);
  private yourPassword: YourPasswordState = new YourPasswordState(this.hasView);
  private opponentBoard: OpponentBoardState = new OpponentBoardState(
    this.hasView
  );
  private opponentPassword: OpponentPasswordState = new OpponentPasswordState(
    this.hasView
  );

  OpponentDisconnected() {}

  AddedChar(update: AddedChar): boolean {
    return this.yourBoard.AddChar(update.char);
  }

  Deleted(): boolean {
    return this.yourBoard.Delete();
  }

  LockedGuess(): Word | null {
    return this.yourBoard.LockedGuess();
  }

  IsGameOver(): boolean {
    return this.yourPassword.Lost() || this.opponentPassword.Won();
  }

  OpponentAddedChar() {
    this.opponentBoard.OpponentAddedChar();
  }
  OpponentDeleted() {
    this.opponentBoard.OpponentDeleted();
  }
  OpponentLockedGuess() {
    this.opponentBoard.OpponentLockedGuess();
  }

  UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge): Promise<void> {
    // Gather animations
    const animations: LetterAnimation[] = [];
    animations.push(...this.yourPassword.Update(update.playerProgress));
    animations.push(...this.yourBoard.Update(update.playerKnowledge));

    animations.push(...this.opponentBoard.Update(update.opponentKnowledge));
    animations.push(...this.opponentPassword.Update(update.opponentProgress));

    // Sequence them
    const sequence: Record<number, (() => void)[]> = {};
    animations.forEach(animation => {
      const index = animation.letterIndex;
      if (!(index in sequence)) {
        sequence[index] = [];
      }
      sequence[index].push(animation.animationStart);
    });

    // String them into a promise
    let promise = new Promise<void>(resolve => resolve());
    for (let i = 0; i < 10; i++) {
      if (!(i in sequence)) {
        continue;
      }
      sequence[i].forEach(animationCallback => {
        promise = promise.then(() => {
          animationCallback();
          return Promise.resolve();
        });
      });
      promise = promise.then(
        () => new Promise(resolve => setTimeout(resolve, 400))
      );
    }
    return promise;
  }

  SetSecret(secret: Word) {
    this.Reset();
    this.yourPassword.SetPassword(secret);
  }
}
