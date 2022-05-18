import { PlayerId } from '../../structs/PlayerId';
import { LobbyServerSocket } from '../../network/LobbyNetworkTypes';
export declare class LobbyServer {
    private EnterGame;
    private lobbies;
    private publicLobbies;
    private players;
    private inGameLobbies;
    constructor(EnterGame: (players: PlayerId[]) => void);
    private RequestRematch;
    PlayerJoins(socket: LobbyServerSocket): void;
    PlayerDisconnected(playerId: PlayerId): void;
    private DeleteLobby;
    private DeclineRematch;
    private FindMatch;
    private AddToLobby;
    private StartGame;
    private RequestLobbyId;
    private JoinLobby;
}
