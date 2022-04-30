import { GameServerSocket } from './GameServerSocket';
export declare class GameServer {
    players: GameServerSocket[];
    private state;
    private answers;
    private guesses;
    private progress;
    private onGameOver;
    constructor(players: GameServerSocket[], onGameOver: () => void);
    private SetState;
    private OpenSubmission;
    private GenerateAnswers;
    private RegisterPlayers;
    private UpdateProgress;
    private RevealHints;
    private CheckWin;
    private ClearWords;
}
