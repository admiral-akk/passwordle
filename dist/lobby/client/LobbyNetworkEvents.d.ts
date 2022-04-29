import { Socket } from 'socket.io-client';
export interface LobbyServerToClientEvents {
    PrivateLobbyId: (lobbyId: string) => void;
    PublicLobbyId: () => void;
    LobbyReady: () => void;
}
export interface LobbyClientToServerEvents {
    HostPublicLobby: () => void;
    HostPrivateLobby: () => void;
    JoinPrivateLobby: (lobbyId: string) => void;
}
export declare type LobbySocket = Socket<LobbyServerToClientEvents, LobbyClientToServerEvents>;
