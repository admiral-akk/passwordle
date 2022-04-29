import { GameServerSocket } from './GameServerSocket';
export declare class GameServer {
    private players;
    private state;
    private answers;
    constructor(players: GameServerSocket[]);
    private GenerateAnswers;
}
