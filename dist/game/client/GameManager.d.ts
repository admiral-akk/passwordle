import { GameSocket } from './GameNetworkEvents';
export declare class GameManager {
    private view;
    private socket;
    private state;
    constructor(socket: GameSocket);
    private SubmissionOpen;
    private SetSecret;
    private SetState;
}
