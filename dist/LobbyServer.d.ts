import express from 'express';
export declare class LobbyServer {
    private lobbyIds;
    private privateLobbyIds;
    private publicLobbyIds;
    constructor();
    RegisterLobbyHandlers(app: express.Application): void;
    private FindMatch;
    private HostLobby;
}
