import { PlayerId } from '../../PlayerId';
import { LobbyServerSocket } from './LobbyNetworkTypes';
export declare class LobbyServer {
    private EnterGame;
    private privateLobbies;
    private publicLobbies;
    private players;
    private rematchRequests;
    constructor(EnterGame: (players: PlayerId[]) => void);
    PlayerJoins(socket: LobbyServerSocket): void;
    PlayerDisconnected(playerId: PlayerId): void;
    EndGame(sockets: LobbyServerSocket[]): void;
    private FindMatch;
    private AddToLobby;
    private RequestLobbyId;
    private RequestRematch;
    private JoinLobby;
}
