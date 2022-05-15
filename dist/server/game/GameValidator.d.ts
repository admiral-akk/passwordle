import { ImmutableGameState } from '../../game/model/GameState';
import { AddedChar } from '../../game/network/Updates';
import { GameActions, GameClientSocket } from '../../network/GameNetworkTypes';
import { PlayerId } from '../../structs/PlayerId';
export declare class GameValidator implements GameActions {
    private state;
    private emitter;
    private playerId?;
    constructor(state: ImmutableGameState, emitter: GameActions, playerId?: PlayerId | undefined);
    AddChar(update: AddedChar): void;
    Delete(): void;
    LockGuess(): void;
    GameClientReady(): void;
}
export declare class GameActionEmitter implements GameActions {
    private socket;
    constructor(socket: GameClientSocket);
    AddChar(update: AddedChar): void;
    Delete(): void;
    LockGuess(): void;
    GameClientReady(): void;
}
