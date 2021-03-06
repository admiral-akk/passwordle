import {GameState} from '../../game/model/GameState';
import {AddedChar, UpdatedAnswerKnowledge} from '../../game/network/Updates';
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

  AddChar = (update: AddedChar, playerId?: PlayerId) => {
    const opponentId = this.GetOpponent(playerId!);
    this.updaters[playerId!].AddedChar(update);
    this.updaters[opponentId].OpponentAddedChar();
  };

  Delete = (playerId?: PlayerId) => {
    const opponentId = this.GetOpponent(playerId!);
    this.updaters[playerId!].Deleted();
    this.updaters[opponentId].OpponentDeleted();
  };

  LockGuess = (playerId?: PlayerId) => {
    const opponentId = this.GetOpponent(playerId!);
    this.updaters[playerId!].LockedGuess();
    this.updaters[opponentId].OpponentLockedGuess();
    if (
      this.gameStates[playerId!].GuessSubmitted() &&
      this.gameStates[opponentId].GuessSubmitted()
    ) {
      this.UpdateKnowledge();
    }
  };

  PlayerDisconnected(playerId: PlayerId) {
    const disconnectPassword = this.gameStates[playerId].GetPassword();
    const remainingPlayer = this.GetOpponent(playerId);
    const endGameSummary =
      this.gameStates[remainingPlayer].GenerateDisconnectedSummary(
        disconnectPassword
      );
    this.updaters[remainingPlayer].OpponentDisconnected(endGameSummary);
  }

  private UpdateKnowledge() {
    const updates: Record<PlayerId, UpdatedAnswerKnowledge> = {};
    this.players.forEach(player => {
      // Update answer knowledge
      const opponent = this.GetOpponent(player);
      const opponentGuess = this.gameStates[opponent].GetCurrentGuess();
      const opponentPassword = this.gameStates[opponent].GetPassword();
      updates[player] = this.gameStates[player].GenerateKnowledgeUpdate(
        opponentGuess,
        opponentPassword
      );
    });
    this.players.forEach(player => {
      this.updaters[player].UpdatedAnswerKnowledge(updates[player]);
    });
  }

  GameClientReady = (playerId?: PlayerId) => {
    this.updaters[playerId!].SetSecret(GetRandomAnswer());
  };
}
