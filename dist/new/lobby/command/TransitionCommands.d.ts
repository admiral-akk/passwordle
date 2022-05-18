import { LobbyCommand } from '../LobbyCommand';
import { LobbyModel } from '../LobbyModel';
import { LobbyUpdate } from '../LobbyUpdate';
export declare class LobbyDesynced extends LobbyCommand {
    protected Apply(model: LobbyModel): LobbyUpdate;
}
export declare class GameComplete extends LobbyCommand {
    protected Apply(model: LobbyModel): LobbyUpdate;
}
