import { ClientSocket } from '../../public/ClientNetworking';
import { PlayerState } from '../../public/PlayerState';
import { GameOverState } from '../../game/model/PlayerBoard';
export declare class LobbyManager extends PlayerState {
    private endState;
    Exit(): Promise<void>;
    private state;
    protected Register(socket: ClientSocket): void;
    protected Deregister(socket: ClientSocket): void;
    constructor(endState?: GameOverState);
    private SetState;
    protected Enter(): void;
    GameReady(): void;
}
