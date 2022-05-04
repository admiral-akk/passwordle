import { GameClientSocket } from './GameNetworkEvents';
export declare class GameManager {
    private view;
    private socket;
    private state;
    private input;
    private InputActive;
    constructor(socket: GameClientSocket);
    private currentGuess;
    private currentIndex;
    private AddChar;
    private Submit;
    private Delete;
    private Lost;
    private Won;
    private SubmissionOpen;
    private SetSecret;
    private Hints;
    private SetState;
}
