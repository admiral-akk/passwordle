import { GameServerSocket } from './GameServerSocket';
export declare class GameServer {
    private players;
    private state;
    private answers;
    private guesses;
    constructor(players: GameServerSocket[]);
    private SetState;
    private OpenSubmission;
    private GenerateAnswers;
    private RegisterPlayers;
    private RevealHints;
    private CheckWin;
    private ClearWords;
}
