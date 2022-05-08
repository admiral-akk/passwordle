"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyServer = void 0;
const LobbyId_1 = require("../LobbyId");
class LobbyServer {
    constructor(EnterGame) {
        this.EnterGame = EnterGame;
        this.lobbies = {};
        this.publicLobbies = [];
    }
    PlayerJoins(socket) {
        const playerId = socket.data.playerId;
        this.lobbies[playerId] = new LobbySocketManager(socket, () => this.FindMatch(playerId), (lobbyId) => this.JoinLobby(playerId, lobbyId), () => this.RequestLobbyId(playerId), (playerId) => this.PlayerDisconnected(playerId));
    }
    PlayerDisconnected(playerId) {
        for (let i = 0; i < this.publicLobbies.length; i++) {
            if (this.publicLobbies[i].GetPlayer() === playerId) {
                this.publicLobbies.splice(i);
                break;
            }
        }
        if (playerId in this.lobbies) {
            delete this.lobbies[playerId];
        }
    }
    EndGame(sockets, ending) {
        const players = sockets.map(socket => socket.data.playerId);
        const lobbies = players.map(player => this.lobbies[player]);
    }
    FindMatch(playerId) {
        const lobby = this.lobbies[playerId];
        if (this.publicLobbies.length === 0) {
            this.publicLobbies.push(lobby);
            lobby.FindingMatch();
        }
        else {
            const other = this.publicLobbies.pop();
            this.ConnectLobbies(lobby, other);
        }
    }
    RequestLobbyId(playerId) {
        this.lobbies[playerId].EnterMenu();
    }
    JoinLobby(playerId, lobbyId) {
        const playerLobby = this.lobbies[playerId];
        if (lobbyId in this.lobbies) {
            this.ConnectLobbies(playerLobby, this.lobbies[lobbyId]);
        }
        else {
            playerLobby.EnterMenu();
        }
    }
    ConnectLobbies(lobby, other) {
        lobby.lobbyId = other.lobbyId;
        lobby.MatchFound(lobby.lobbyId);
        lobby.GameReady();
        other.MatchFound(other.lobbyId);
        other.GameReady();
        this.EnterGame([lobby.GetPlayer(), other.GetPlayer()]);
    }
}
exports.LobbyServer = LobbyServer;
class LobbySocketManager {
    constructor(socket, FindMatch, JoinLobby, RequestLobbyId, PlayerDisconnect) {
        this.socket = socket;
        this.FindMatch = FindMatch;
        this.JoinLobby = JoinLobby;
        this.RequestLobbyId = RequestLobbyId;
        this.PlayerDisconnect = PlayerDisconnect;
        this.lobbyId = (0, LobbyId_1.GenerateLobbyId)(socket);
        this.RegisterSocket(socket);
    }
    GetPlayer() {
        return this.socket.data.playerId;
    }
    // LobbyClientRequests
    EnterMenu() {
        this.lobbyId = (0, LobbyId_1.GenerateLobbyId)(this.socket);
        this.socket.emit('EnterMenu', this.lobbyId);
    }
    FindingMatch() {
        this.socket.emit('FindingMatch');
    }
    MatchFound(lobbyId) {
        this.socket.emit('MatchFound', lobbyId);
    }
    RegisterSocket(socket) {
        socket.on('FindMatch', () => this.FindMatch());
        socket.on('JoinLobby', (lobbyId) => this.JoinLobby(lobbyId));
        socket.on('RequestLobbyId', () => this.RequestLobbyId());
        socket.on('disconnect', () => {
            this.PlayerDisconnect(this.GetPlayer());
        });
    }
    GameReady() {
        this.socket.emit('GameReady');
    }
}
//# sourceMappingURL=LobbyServer.js.map