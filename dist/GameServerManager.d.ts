import { GameServer } from './game/GameServer';
import { GameServerSocket } from './game/GameServerSocket';
export declare class GameServerManager {
    private activeGames;
    private gameComplete;
    constructor(gameComplete: (game: GameServerSocket[]) => void);
    NewGame(players: GameServerSocket[]): void;
    GameCompleted(game: GameServer): void;
}
