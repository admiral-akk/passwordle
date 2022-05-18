import { LobbyCommand } from '../LobbyCommand';
import { LobbyModel } from '../LobbyModel';
import { LobbyUpdate } from '../LobbyUpdate';
export declare class RematchRequested extends LobbyCommand {
    protected Apply(model: LobbyModel): LobbyUpdate;
}
export declare class RematchRejected extends LobbyCommand {
    protected Apply(model: LobbyModel): LobbyUpdate;
}
export declare class TheyRequestedRematch extends LobbyCommand {
    protected Apply(model: LobbyModel): LobbyUpdate;
}
export declare class TheyRejectedRematch extends LobbyCommand {
    protected Apply(model: LobbyModel): LobbyUpdate;
}
