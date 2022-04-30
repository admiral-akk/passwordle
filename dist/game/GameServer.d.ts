import { GameServerSocket } from './GameServerSocket';
export declare class GameServer {
    private players;
    private state;
    private answers;
    private guesses;
    private progress;
    constructor(players: GameServerSocket[]);
    private SetState;
    private OpenSubmission;
    private GenerateAnswers;
    private RegisterPlayers;
    private UpdateProgress;
    private RevealHints;
    private CheckWin;
    private ClearWords;
}
