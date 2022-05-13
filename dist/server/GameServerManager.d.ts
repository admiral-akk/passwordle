import { GameServerSocket } from '../network/GameNetworkTypes';
import { PlayerId } from '../structs/PlayerId';
export declare class GameServerManager {
    private ExitGame;
    private activeGames;
    constructor(ExitGame: (game: PlayerId[]) => void);
    EnterGame(players: GameServerSocket[]): void;
    private GameCompleted;
}
