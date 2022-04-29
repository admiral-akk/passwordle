import { GameSocket } from './GameNetworkEvents';
export declare class GameManager {
    private view;
    private socket;
    private state;
    private input;
    private InputActive;
    constructor(socket: GameSocket);
    private currentGuess;
    private AddChar;
    private Submit;
    private Delete;
    private SubmissionOpen;
    private SetSecret;
    private SetState;
}
