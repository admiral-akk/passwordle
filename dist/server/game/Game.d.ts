import { GameState } from '../../game/model/GameState';
import { AddedChar, LockedGuess } from '../../game/network/updates/Updates';
import { GameActions } from '../../network/GameNetworkTypes';
import { PlayerId } from '../../structs/PlayerId';
import { GameUpdater } from './GameUpdater';
export declare class Game implements GameActions {
    players: PlayerId[];
    gameStates: Record<PlayerId, GameState>;
    private updaters;
    constructor(players: PlayerId[]);
    RegisterUpdater(player: PlayerId, updater: GameUpdater): void;
    GetOpponent(player: PlayerId): PlayerId;
    AddedChar: (update: AddedChar, playerId?: PlayerId | undefined) => void;
    Deleted: (playerId?: PlayerId | undefined) => void;
    LockedGuess: (update: LockedGuess, playerId?: PlayerId | undefined) => void;
    private UpdateKnowledge;
    GameClientReady: (playerId?: PlayerId | undefined) => void;
}
