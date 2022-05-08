"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyServer = void 0;
const LobbyId_1 = require("../LobbyId");
const Lobby_1 = require("./Lobby");
class LobbyServer {
    constructor(EnterGame) {
        this.EnterGame = EnterGame;
        this.privateLobbies = {};
        this.publicLobbies = [];
        this.players = {};
        this.rematchRequests = {};
    }
    PlayerJoins(socket) {
        const playerId = socket.data.playerId;
        this.players[playerId] = new LobbySocketManager(socket, () => this.FindMatch(playerId), (lobbyId) => this.JoinLobby(playerId, lobbyId), () => this.RequestLobbyId(playerId), (playerId) => this.PlayerDisconnected(playerId), () => this.RequestRematch(playerId));
    }
    PlayerDisconnected(playerId) {
        const lobbyId = this.players[playerId].lobbyId;
        if (lobbyId in this.privateLobbies) {
            const index = this.privateLobbies[lobbyId].players.indexOf(playerId);
            if (index !== -1) {
                this.privateLobbies[lobbyId].players.splice(index, 1);
            }
            if (this.privateLobbies[lobbyId].players.length === 0) {
                delete this.privateLobbies[lobbyId];
            }
        }
        for (let i = 0; i < this.publicLobbies.length; i++) {
            if (this.publicLobbies[i].players.indexOf(playerId) > -1) {
                this.publicLobbies.splice(i);
                break;
            }
        }
        if (playerId in this.players) {
            delete this.players[playerId];
        }
    }
    EndGame(sockets) {
        const players = sockets.map(socket => socket.data.playerId);
        const lobbies = players.map(player => this.players[player]);
    }
    FindMatch(playerId) {
        if (this.publicLobbies.length === 0) {
            const lobby = new Lobby_1.Lobby([playerId], this.players[playerId].lobbyId);
            this.publicLobbies.push(lobby);
            this.players[playerId].FindingMatch();
        }
        else {
            const lobby = this.publicLobbies.pop();
            this.AddToLobby(lobby, playerId);
        }
    }
    AddToLobby(lobby, playerId) {
        lobby.players.push(playerId);
        this.players[playerId].lobbyId = lobby.lobbyId;
        lobby.players.forEach(playerId => {
            this.players[playerId].MatchFound(lobby.lobbyId);
            this.players[playerId].GameReady();
        });
        this.EnterGame(lobby.players);
    }
    RequestLobbyId(playerId) {
        const lobby = new Lobby_1.Lobby([playerId], this.players[playerId].DefaultLobbyId());
        this.privateLobbies[lobby.lobbyId] = lobby;
        this.players[playerId].EnterMenu();
    }
    RequestRematch(playerId) { }
    JoinLobby(playerId, lobbyId) {
        if (lobbyId in this.privateLobbies) {
            const lobby = this.privateLobbies[lobbyId];
            this.AddToLobby(lobby, playerId);
        }
        else {
            this.RequestLobbyId(playerId);
        }
    }
}
exports.LobbyServer = LobbyServer;
class LobbySocketManager {
    constructor(socket, FindMatch, JoinLobby, RequestLobbyId, PlayerDisconnect, RequestRematch) {
        this.socket = socket;
        this.FindMatch = FindMatch;
        this.JoinLobby = JoinLobby;
        this.RequestLobbyId = RequestLobbyId;
        this.PlayerDisconnect = PlayerDisconnect;
        this.RequestRematch = RequestRematch;
        this.lobbyId = (0, LobbyId_1.GenerateLobbyId)(socket);
        this.RegisterSocket(socket);
    }
    DefaultLobbyId() {
        return (0, LobbyId_1.GenerateLobbyId)(this.socket);
    }
    GetPlayer() {
        return this.socket.data.playerId;
    }
    StartRematch(lobbyId) { }
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