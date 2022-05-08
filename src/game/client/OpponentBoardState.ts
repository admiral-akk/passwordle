import {BoardState} from '../model/BoardState';

export class OpponentBoardState extends BoardState {
  private view: OpponentBoardView = new OpponentBoardView();
  OpponentAddedChar() {
    this.view.OpponentAddedChar();
  }
  OpponentDeleted() {
    this.view.OpponentDeleted();
  }
  OpponentLockedGuess() {
    this.view.OpponentLockedGuess();
  }
}

class OpponentBoardView {
  OpponentAddedChar() {}
  OpponentDeleted() {}
  OpponentLockedGuess() {}
}
