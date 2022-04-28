"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyServer = void 0;
const LobbyNetwork_1 = require("./public/lobby/LobbyNetwork");
const ClientId_1 = require("./public/struct/ClientId");
class LobbyServer {
    constructor() {
        this.lobbyIds = [];
        this.privateLobbyIds = [];
        this.publicLobbyIds = [];
    }
    RegisterLobbyHandlers(app) {
        app.post(LobbyNetwork_1.HOST_LOBBY_ENDPOINT_NAME, (req, res) => this.HostLobby(req, res));
        app.post(LobbyNetwork_1.FIND_MATCH_ENDPOINT_NAME, (req, res) => this.FindMatch(req, res));
    }
    FindMatch(req, res) {
        const lobbyId = GenerateLobbyId(this.lobbyIds);
        console.log(`Creating new public lobby: ${lobbyId}`);
        this.lobbyIds.push(lobbyId);
        this.publicLobbyIds.push(lobbyId);
        res.json(new ClientId_1.ClientId(lobbyId));
    }
    HostLobby(req, res) {
        const lobbyId = GenerateLobbyId(this.lobbyIds);
        console.log(`Creating new private lobby: ${lobbyId}`);
        this.lobbyIds.push(lobbyId);
        this.privateLobbyIds.push(lobbyId);
        res.json(new ClientId_1.ClientId(lobbyId));
    }
}
exports.LobbyServer = LobbyServer;
function GenerateLobbyId(takenIds) {
    let lobbyId;
    do {
        lobbyId = Math.floor(Math.random() * 10000).toString();
    } while (lobbyId in takenIds);
    return lobbyId;
}
//# sourceMappingURL=LobbyServer.js.map