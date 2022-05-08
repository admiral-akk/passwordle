import { EndGameState } from '../../game/client/view/subview/EndGameView';
import { PlayerId } from '../../PlayerId';
import { LobbyServerSocket } from './LobbyNetworkTypes';
export declare class LobbyServer {
    private EnterGame;
    private lobbies;
    private publicLobbies;
    constructor(EnterGame: (players: PlayerId[]) => void);
    PlayerJoins(socket: LobbyServerSocket): void;
    PlayerDisconnected(playerId: PlayerId): void;
    EndGame(sockets: LobbyServerSocket[], ending: Record<PlayerId, EndGameState>): void;
    private FindMatch;
    private RequestLobbyId;
    private JoinLobby;
    private ConnectLobbies;
}
