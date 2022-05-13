import { GameServerSocket } from '../../network/GameNetworkTypes';
import { PlayerId } from '../../structs/PlayerId';
export declare class GameServer {
    private ExitGame;
    private gameValidators;
    private gameUpdaters;
    private games;
    constructor(ExitGame: (game: PlayerId[]) => void);
    StartGame(playerSockets: GameServerSocket[]): void;
    EndGame(players: PlayerId[]): void;
}
