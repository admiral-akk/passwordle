import { LobbyServer } from './lobby/LobbyServer';
import { LobbyServerSocket } from './lobby/LobbyServerSocket';
export declare class LobbyServerManager {
    private lobbies;
    private matchmakingLobbyIds;
    private startGame;
    constructor(startGame: (players: LobbyServerSocket[]) => void);
    AddSocket(socket: LobbyServerSocket): void;
    AddLobby(lobby: LobbyServer): void;
    RematchMenu(players: LobbyServerSocket[]): void;
    private CreatePrivateLobby;
    private EnterMatchmaking;
    private JoinPrivateLobby;
    private RegisterLobbyHandlers;
    private AcceptRematch;
    private RejectRematch;
    private Connect;
    private StartGame;
    private RemoveLobby;
}
