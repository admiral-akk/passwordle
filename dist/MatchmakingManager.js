"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchmakingManager = void 0;
const ClientId_1 = require("./public/structs/ClientId");
const LobbyId_1 = require("./public/structs/LobbyId");
const PlayerId_1 = require("./public/structs/PlayerId");
const LobbyState_1 = require("./structs/LobbyState");
class MatchmakingManager {
    constructor() {
        this.openLobbyIds = {};
        this.lobbyIds = {};
    }
    GenerateId(existingIds) {
        let id;
        do {
            id = Math.floor(Math.random() * 100000).toString();
        } while (id in existingIds);
        return id;
    }
    GeneratePlayerId(players) {
        let id;
        do {
            id = (0, PlayerId_1.GenerateRandomPlayerId)();
        } while (id in players);
        return id;
    }
    GenerateLobbyId() {
        let id;
        do {
            id = (0, LobbyId_1.GenerateRandomLobbyId)();
        } while (id in Object.keys(this.lobbyIds));
        return id;
    }
    StartLobby() {
        const lobbyId = this.GenerateLobbyId();
        const lobbyState = new LobbyState_1.LobbyState(lobbyId);
        const playerId = this.GeneratePlayerId(lobbyState.players);
        lobbyState.AddPlayer(playerId);
        this.openLobbyIds[lobbyId] = lobbyState;
        this.lobbyIds[lobbyId] = lobbyState;
        return new ClientId_1.ClientId(lobbyId, playerId);
    }
    JoinLobby(lobbyId) {
        if (!(lobbyId in this.openLobbyIds)) {
            throw "Lobby doesn't exist!";
        }
        const lobbyState = this.openLobbyIds[lobbyId];
        const playerId = this.GeneratePlayerId(lobbyState.players);
        lobbyState.AddPlayer(playerId);
        delete this.openLobbyIds[lobbyId];
        this.lobbyIds[lobbyId] = lobbyState;
        return [new ClientId_1.ClientId(lobbyId, playerId), lobbyState.players];
    }
}
exports.MatchmakingManager = MatchmakingManager;
//# sourceMappingURL=MatchmakingManager.js.map