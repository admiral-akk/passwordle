import { GameState } from '../../game/model/GameState';
import { AddedChar, LockedGuess, UpdatedAnswerKnowledge } from '../../game/network/updates/Updates';
import { GameUpdateEmitter, GameUpdates } from '../../network/GameNetworkTypes';
import { Word } from '../../structs/Word';
export declare class GameUpdater implements GameUpdates {
    private state;
    private emitter?;
    constructor(state: GameState, emitter?: GameUpdateEmitter | undefined);
    AddedChar: (update: AddedChar) => void;
    Deleted: () => void;
    LockedGuess: (update: LockedGuess) => void;
    OpponentAddedChar: () => void;
    OpponentDeleted: () => void;
    OpponentLockedGuess: () => void;
    SetSecret: (secret: Word) => void;
    UpdatedAnswerKnowledge: (update: UpdatedAnswerKnowledge) => void;
    OpponentDisconnected: () => void;
}
