import { GameServer } from './game/GameServer';
export declare class GameServerManager {
    private activeGames;
    private handoffGame;
    constructor(handoffGame: (game: GameServer) => void);
    AddGame(game: GameServer): void;
    GameCompleted(): void;
}
