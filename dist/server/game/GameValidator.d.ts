import { GameState } from '../../game/model/GameState';
import { AddedChar, LockedGuess } from '../../game/network/updates/Updates';
import { GameActions } from '../../network/GameNetworkTypes';
import { PlayerId } from '../../structs/PlayerId';
export declare class GameValidator implements GameActions {
    private playerId;
    private state;
    private emitter;
    constructor(playerId: PlayerId, state: GameState, emitter: GameActions);
    AddedChar: (update: AddedChar) => void;
    Deleted: () => void;
    LockedGuess: (update: LockedGuess) => void;
    GameClientReady: () => void;
}
