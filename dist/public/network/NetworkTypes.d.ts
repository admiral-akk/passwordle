export interface ServerToClientEvents {
    PrivateLobbyId: (lobbyId: string) => void;
    PublicLobbyId: (lobbyId: string) => void;
}
export interface ClientToServerEvents {
    HostPublicLobby: () => void;
    HostPrivateLobby: () => void;
}
