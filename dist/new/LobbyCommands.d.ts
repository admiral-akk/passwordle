import { LobbyId } from '../structs/LobbyId';
import { Command } from './Command';
export declare class CreatedLobby extends Command {
    lobby: LobbyId;
    constructor(lobby: LobbyId);
}
export declare class JoinedLobby extends Command {
    lobby: LobbyId;
    constructor(lobby: LobbyId);
}
export declare class TheyJoinedLobby extends Command {
    lobby: LobbyId;
    constructor(lobby: LobbyId);
}
export declare class TheyLeftLobby extends Command {
    lobby: LobbyId;
    constructor(lobby: LobbyId);
}
export declare class RematchRequested extends Command {
    lobby: LobbyId;
    constructor(lobby: LobbyId);
}
export declare class RematchRejected extends Command {
    lobby: LobbyId;
    constructor(lobby: LobbyId);
}
export declare class TheyRequestedRematch extends Command {
    lobby: LobbyId;
    constructor(lobby: LobbyId);
}
export declare class TheyRejectedRematch extends Command {
    lobby: LobbyId;
    constructor(lobby: LobbyId);
}
