import { GameServerSocket } from './game/network/GameNetworkTypes';
import { PlayerId } from './PlayerId';
export declare class GameServerManager {
    private ExitGame;
    private activeGames;
    constructor(ExitGame: (game: PlayerId[]) => void);
    EnterGame(players: GameServerSocket[]): void;
    private GameCompleted;
}
