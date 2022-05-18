import { LobbyId } from '../../structs/LobbyId';
import { LobbyModel, LobbyState } from './LobbyModel';
export declare class LobbyUpdate {
    state?: Delta<LobbyState>;
    lobbyId?: Delta<LobbyId | undefined>;
    playerCount?: Delta<number>;
    rematchRequestCount?: Delta<number>;
    requestedRematch?: Delta<boolean>;
    SetState(model: LobbyModel, newState: LobbyState): void;
    SetLobbyId(model: LobbyModel, newState?: LobbyId): void;
    SetPlayerCount(model: LobbyModel, newState: number): void;
    SetRematchCount(model: LobbyModel, newState: number): void;
    SetRequestedRematch(model: LobbyModel, newState: boolean): void;
}
export declare class Delta<Type> {
    before: Type;
    after: Type;
    constructor(before: Type, after: Type);
}
