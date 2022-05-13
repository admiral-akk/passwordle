import { AddedChar, LockedGuess } from '../../game/network/updates/Updates';
import { GameActions, GameServerSocket } from '../../network/GameNetworkTypes';
import { PlayerId } from '../../structs/PlayerId';
export declare class GameServer implements GameActions {
    private ExitGame;
    private gameValidators;
    private gameUpdaters;
    private games;
    constructor(ExitGame: (game: PlayerId[]) => void);
    StartGame(playerSockets: GameServerSocket[]): void;
    EndGame(players: PlayerId[]): void;
    AddedChar: (update: AddedChar, playerId?: PlayerId | undefined) => void;
    Deleted: (playerId?: PlayerId | undefined) => void;
    LockedGuess: (update: LockedGuess, playerId?: PlayerId | undefined) => void;
    GameClientReady: (playerId?: PlayerId | undefined) => void;
}
