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

enum State {
  WaitingForKnowledge,
  CanSubmit,
  GameEnded,
}

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

  state: State = State.WaitingForKnowledge;

  constructor(private hasView: boolean = false) {}

  private yourBoard: YourBoardState = new YourBoardState(this.hasView);
  private yourPassword: YourPasswordState = new YourPasswordState(this.hasView);
  private opponentBoard: OpponentBoardState = new OpponentBoardState(
    this.hasView
  );
  private opponentPassword: OpponentPasswordState = new OpponentPasswordState(
    this.hasView
  );

  OpponentDisconnected() {
    this.state = State.GameEnded;
  }

  AddedChar(update: AddedChar): boolean {
    return this.yourBoard.AddChar(update.char);
  }

  Deleted(): boolean {
    return this.yourBoard.Delete();
  }

  LockedGuess(): Word | null {
    this.state = State.WaitingForKnowledge;
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

  UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge) {
    this.yourBoard.Update(update.playerKnowledge);
    this.opponentBoard.Update(update.opponentKnowledge);
    this.yourPassword.Update(update.playerProgress);
    this.opponentPassword.Update(update.opponentProgress);
    this.state = State.CanSubmit;
  }

  SetSecret(secret: Word) {
    this.Reset();
    this.yourPassword.SetPassword(secret);
    this.state = State.CanSubmit;
  }
}
