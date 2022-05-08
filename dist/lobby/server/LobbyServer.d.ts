import { PlayerId } from '../../PlayerId';
import { LobbyServerSocket } from './LobbyNetworkTypes';
export declare class LobbyServer {
    private EnterGame;
    private lobbies;
    private publicLobbies;
    private players;
    constructor(EnterGame: (players: PlayerId[]) => void);
    private RequestRematch;
    PlayerJoins(socket: LobbyServerSocket): void;
    PlayerDisconnected(playerId: PlayerId): void;
    EndGame(sockets: LobbyServerSocket[]): void;
    private FindMatch;
    private AddToLobby;
    private StartGame;
    private RequestLobbyId;
    private JoinLobby;
}
