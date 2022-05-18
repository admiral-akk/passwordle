import { CommandData, UndoFunction } from '../Command';
import { LobbyCommand } from './LobbyCommand';
import { LobbyModel } from './LobbyModel';
export declare class CreatedLobby extends LobbyCommand {
    constructor(data: CommandData);
    protected Apply(model: LobbyModel): UndoFunction;
}
export declare class JoinedLobby extends LobbyCommand {
    protected Apply(model: LobbyModel): UndoFunction;
}
export declare class TheyJoinedLobby extends LobbyCommand {
    protected Apply(model: LobbyModel): UndoFunction;
}
export declare class TheyLeftLobby extends LobbyCommand {
    protected Apply(model: LobbyModel): UndoFunction;
}
export declare class RematchRequested extends LobbyCommand {
    protected Apply(model: LobbyModel): UndoFunction;
}
export declare class RematchRejected extends LobbyCommand {
    protected Apply(model: LobbyModel): UndoFunction;
}
export declare class TheyRequestedRematch extends LobbyCommand {
    protected Apply(model: LobbyModel): UndoFunction;
}
export declare class TheyRejectedRematch extends LobbyCommand {
    protected Apply(model: LobbyModel): UndoFunction;
}
export declare class LobbyDesynced extends LobbyCommand {
    protected Apply(model: LobbyModel): UndoFunction;
}
export declare class GameComplete extends LobbyCommand {
    protected Apply(model: LobbyModel): UndoFunction;
}
export declare const LobbyCommands: (typeof CreatedLobby | typeof JoinedLobby | typeof TheyJoinedLobby | typeof TheyLeftLobby | typeof RematchRequested | typeof RematchRejected | typeof TheyRequestedRematch | typeof TheyRejectedRematch | typeof LobbyDesynced | typeof GameComplete)[];
