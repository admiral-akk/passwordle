import { CommandData } from '../../Command';
import { LobbyCommand } from '../LobbyCommand';
import { LobbyModel } from '../LobbyModel';
import { LobbyUpdate } from '../LobbyUpdate';
export declare class CreatedLobby extends LobbyCommand {
    constructor(data: CommandData);
    protected Apply(model: LobbyModel): LobbyUpdate;
}
export declare class JoinedLobby extends LobbyCommand {
    protected Apply(model: LobbyModel): LobbyUpdate;
}
export declare class TheyJoinedLobby extends LobbyCommand {
    protected Apply(model: LobbyModel): LobbyUpdate;
}
export declare class TheyLeftLobby extends LobbyCommand {
    protected Apply(model: LobbyModel): LobbyUpdate;
}
