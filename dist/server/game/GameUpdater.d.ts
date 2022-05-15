import { AddedChar, UpdatedAnswerKnowledge } from '../../game/network/Updates';
import { GameUpdates } from '../../network/GameNetworkTypes';
import { Word } from '../../structs/Word';
export declare class GameUpdater implements GameUpdates {
    private consumers;
    constructor(consumers: GameUpdates[]);
    AddedChar: (update: AddedChar) => void;
    Deleted: () => void;
    LockedGuess: () => void;
    OpponentAddedChar: () => void;
    OpponentDeleted: () => void;
    OpponentLockedGuess: () => void;
    SetSecret: (secret: Word) => void;
    UpdatedAnswerKnowledge: (update: UpdatedAnswerKnowledge) => void;
    OpponentDisconnected: () => void;
    RandomGuess: (guess: Word) => void;
}
