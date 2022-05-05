"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerLobby = void 0;
const Lobby_1 = require("../model/Lobby");
class ServerLobby {
    constructor() {
        this.lobbies = {};
        this.publicLobbies = [];
    }
    PlayerJoins(socket) {
        const playerId = socket.data.playerId;
        this.lobbies[playerId] = new LobbyManager(socket, () => this.RequestMainMenu(playerId), () => this.StartMatchmaking(playerId), () => this.ReturnToMainMenu(playerId), () => { });
        this.lobbies[playerId].LobbyCreated(playerId);
    }
    RequestMainMenu(player) {
        this.lobbies[player].LobbyCreated(player);
    }
    StartMatchmaking(player) {
        const lobby = this.lobbies[player];
        if (this.publicLobbies.length > 0) {
            // connect players
            const otherLobby = this.publicLobbies.pop();
            lobby.MatchFound(otherLobby.GetId());
            otherLobby.MatchFound(otherLobby.GetId());
        }
        else {
            this.publicLobbies.push(lobby);
        }
    }
    ReturnToMainMenu(player) {
        this.lobbies[player].LobbyCreated(player);
    }
}
exports.ServerLobby = ServerLobby;
class LobbyManager {
    constructor(socket, RequestMainMenu, StartMatchmaking, ReturnToMainMenu, StartingGame) {
        this.socket = socket;
        this.RequestMainMenu = RequestMainMenu;
        this.StartMatchmaking = StartMatchmaking;
        this.ReturnToMainMenu = ReturnToMainMenu;
        this.StartingGame = StartingGame;
        this.lobby = new Lobby_1.Lobby();
        socket.on('RequestMainMenu', () => this.RequestMainMenu());
        socket.on('StartMatchmaking', () => this.StartMatchmaking());
        socket.on('ReturnToMainMenu', () => this.ReturnToMainMenu());
        socket.on('StartingGame', () => this.StartingGame());
    }
    LobbyCreated(lobbyId) {
        this.lobby.LobbyCreated(lobbyId);
        this.socket.emit('LobbyCreated', lobbyId);
    }
    MatchFound(lobbyId) {
        this.lobby.MatchFound(lobbyId);
        this.socket.emit('MatchFound', lobbyId);
    }
    GetId() {
        return this.lobby.lobbyId;
    }
}
//# sourceMappingURL=ServerLobby.js.map