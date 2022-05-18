import { GameState } from '../../game/model/GameState';
import { AddedChar } from '../../game/network/Updates';
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
    AddChar: (update: AddedChar, playerId?: PlayerId | undefined) => void;
    Delete: (playerId?: PlayerId | undefined) => void;
    LockGuess: (playerId?: PlayerId | undefined) => void;
    PlayerDisconnected(playerId: PlayerId): void;
    private UpdateKnowledge;
    GameClientReady: (playerId?: PlayerId | undefined) => void;
}
