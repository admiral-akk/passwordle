import { EndGameState } from './game/EndGameState';
import { GameServerSocket } from './game/network/GameNetworkTypes';
import { PlayerId } from './PlayerId';
export declare class GameServerManager {
    private ExitGame;
    private activeGames;
    constructor(ExitGame: (game: PlayerId[], ending: Record<PlayerId, EndGameState>) => void);
    EnterGame(players: GameServerSocket[]): void;
    private GameCompleted;
}
