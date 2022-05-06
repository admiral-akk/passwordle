import { PlayerId } from '../../PlayerId';
import { NewLobbyServerSocket } from './LobbyNetworkTypes';
export declare class NewLobbyServer {
    private EnterGame;
    private lobbies;
    private publicLobbies;
    constructor(EnterGame: (players: PlayerId[]) => void);
    PlayerJoins(socket: NewLobbyServerSocket): void;
    EndGame(sockets: NewLobbyServerSocket[]): void;
    private FindMatch;
    private JoinLobby;
    private ConnectLobbies;
}
