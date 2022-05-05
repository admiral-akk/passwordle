import { GameServerSocket } from './game/GameServerSocket';
import { PlayerId } from './PlayerId';
export declare class GameServerManager {
    private ExitGame;
    private activeGames;
    constructor(ExitGame: (game: PlayerId[]) => void);
    EnterGame(players: GameServerSocket[]): void;
    private GameCompleted;
}
