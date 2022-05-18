import { LobbyId } from '../../structs/LobbyId';
import { Command } from '../Command';
import { CommandHandler } from '../CommandHandler';
import { LobbyUpdate } from './LobbyUpdate';
export declare enum LobbyState {
    None = 0,
    InLobby = 1,
    InGame = 2
}
export declare class LobbyModel extends CommandHandler<LobbyModel, LobbyUpdate> {
    protected Execute(command: Command<LobbyModel, LobbyUpdate>): void;
    protected Apply(update: LobbyUpdate): void;
    protected Undo(update: LobbyUpdate): void;
    state: LobbyState;
    lobbyId?: LobbyId;
    playerCount: number;
    rematchRequestCount: number;
    requestedRematch: boolean;
}
