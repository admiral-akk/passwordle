import { Socket } from 'socket.io-client';
import { ClientToServerEvents, ServerToClientEvents } from '../NetworkTypes';
export declare enum State {
    Start = 0,
    InLobby = 1,
    InGame = 2
}
export declare class ExitState {
    previousState: State;
    constructor(previousState: State);
}
export declare class ClientPlayer {
    private socket;
    private stateLogic;
    private playerSocket;
    constructor(socket: Socket<ServerToClientEvents, ClientToServerEvents>);
    EnterLobby(): void;
    EnterGame(): void;
    private ChangeState;
}
export declare abstract class ClientState {
    private socket;
    Enter(transfer: ExitState): void;
    Exit(nextState: State): ExitState;
    abstract State(): State;
    constructor(socket: Socket<ServerToClientEvents, ClientToServerEvents>);
}
