import {GameState} from '../../game/model/GameState';
import {AddedChar, LockedGuess} from '../../game/network/Updates';
import {GameActions} from '../../network/GameNetworkTypes';
import {PlayerId} from '../../structs/PlayerId';

// Validator: Takes Action, State, validates and emits Action. Cannot change state.
export class GameValidator implements GameActions {
  constructor(
    private playerId: PlayerId,
    private state: GameState,
    private emitter: GameActions
  ) {}
  AddedChar = (update: AddedChar) => {
    this.emitter.AddedChar(update, this.playerId);
  };
  Deleted = () => {
    this.emitter.Deleted(this.playerId);
  };
  LockedGuess = (update: LockedGuess) => {
    this.emitter.LockedGuess(update, this.playerId);
  };
  GameClientReady = () => {
    this.emitter.GameClientReady(this.playerId);
  };
}
