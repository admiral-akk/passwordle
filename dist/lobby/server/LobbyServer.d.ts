import { PlayerId } from '../../PlayerId';
import { LobbyServerSocket } from './LobbyNetworkTypes';
export declare class NewLobbyServer {
    private EnterGame;
    private lobbies;
    private publicLobbies;
    constructor(EnterGame: (players: PlayerId[]) => void);
    PlayerJoins(socket: LobbyServerSocket): void;
    PlayerDisconnected(playerId: PlayerId): void;
    EndGame(sockets: LobbyServerSocket[]): void;
    private FindMatch;
    private JoinLobby;
    private ConnectLobbies;
}
