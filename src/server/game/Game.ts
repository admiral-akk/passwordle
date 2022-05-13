import {GameState} from '../../game/model/GameState';
import {AddedChar, LockedGuess} from '../../game/network/updates/Updates';
import {GetRandomAnswer} from '../../game/Words';
import {GameActions} from '../../network/GameNetworkTypes';
import {PlayerId} from '../../structs/PlayerId';
import {GameUpdater} from './GameUpdater';

// Takes in action, outputs updates
export class Game implements GameActions {
  public gameStates: Record<PlayerId, GameState> = {};
  private updaters: Record<PlayerId, GameUpdater> = {};

  constructor(public players: PlayerId[]) {
    players.forEach(player => (this.gameStates[player] = new GameState()));
  }

  RegisterUpdater(player: PlayerId, updater: GameUpdater) {
    this.updaters[player] = updater;
  }

  GetOpponent(player: PlayerId): PlayerId {
    if (this.players[0] === player) {
      return this.players[1];
    } else {
      return this.players[0];
    }
  }

  AddedChar = (update: AddedChar, playerId?: PlayerId) => {
    const opponentId = this.GetOpponent(playerId!);
    this.updaters[playerId!].AddedChar(update);
    this.updaters[opponentId].OpponentAddedChar();
  };

  Deleted = (playerId?: PlayerId) => {
    const opponentId = this.GetOpponent(playerId!);
    this.updaters[playerId!].Deleted();
    this.updaters[opponentId].OpponentDeleted();
  };

  LockedGuess = (update: LockedGuess, playerId?: PlayerId) => {
    const opponentId = this.GetOpponent(playerId!);
    this.updaters[playerId!].LockedGuess(update);
    this.updaters[opponentId].OpponentLockedGuess();
    if (
      this.gameStates[playerId!].GuessSubmitted() &&
      this.gameStates[opponentId].GuessSubmitted()
    ) {
      this.UpdateKnowledge();
    }
  };

  private UpdateKnowledge() {}

  GameClientReady = (playerId?: PlayerId) => {
    this.updaters[playerId!].SetSecret(GetRandomAnswer());
  };
}
