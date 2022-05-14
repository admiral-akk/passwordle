"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyServer = void 0;
const LobbyId_1 = require("../../structs/LobbyId");
const Lobby_1 = require("./Lobby");
class LobbyServer {
    constructor(EnterGame) {
        this.EnterGame = EnterGame;
        this.lobbies = {};
        this.publicLobbies = [];
        this.players = {};
        this.inGameLobbies = {};
    }
    RequestRematch(playerId) {
        const lobbyId = this.players[playerId].lobbyId;
        const lobby = this.lobbies[lobbyId];
        lobby.RequestRematch(playerId);
        if (lobby.rematchRequested.length === 2) {
            lobby.rematchRequested = [];
            this.StartGame(lobby);
        }
    }
    PlayerJoins(socket) {
        const playerId = socket.data.playerId;
        this.players[playerId] = new LobbySocketManager(socket, () => this.FindMatch(playerId), (lobbyId) => this.JoinLobby(playerId, lobbyId), () => this.RequestLobbyId(playerId), (playerId) => this.PlayerDisconnected(playerId), () => this.RequestRematch(playerId), () => this.DeclineRematch(playerId));
    }
    PlayerDisconnected(playerId) {
        const lobbyId = this.players[playerId].lobbyId;
        if (lobbyId in this.lobbies) {
            const index = this.lobbies[lobbyId].players.indexOf(playerId);
            if (index !== -1) {
                this.lobbies[lobbyId].players.splice(index, 1);
            }
            if (this.lobbies[lobbyId].players.length === 0) {
                delete this.lobbies[lobbyId];
            }
        }
        if (this.publicLobbies.indexOf(lobbyId) > -1) {
            this.publicLobbies.splice(this.publicLobbies.indexOf(lobbyId));
        }
        if (playerId in this.players) {
            delete this.players[playerId];
        }
    }
    DeleteLobby(lobbyId) {
        if (lobbyId in this.lobbies) {
            delete this.lobbies[lobbyId];
        }
        if (lobbyId in this.inGameLobbies) {
            delete this.inGameLobbies[lobbyId];
        }
        if (this.publicLobbies.indexOf(lobbyId) > -1) {
            this.publicLobbies.splice(this.publicLobbies.indexOf(lobbyId));
        }
    }
    DeclineRematch(playerId) {
        const lobbyId = this.players[playerId].lobbyId;
        const players = this.lobbies[lobbyId].players;
        this.DeleteLobby(lobbyId);
        players.forEach(playerId => {
            this.RequestLobbyId(playerId);
        });
    }
    EndGame(sockets) { }
    FindMatch(playerId) {
        if (this.publicLobbies.length === 0) {
            const lobbyId = this.players[playerId].lobbyId;
            this.publicLobbies.push(lobbyId);
            this.players[playerId].FindingMatch();
        }
        else {
            const lobbyId = this.publicLobbies.pop();
            this.AddToLobby(this.lobbies[lobbyId], playerId);
        }
    }
    AddToLobby(lobby, playerId) {
        lobby.players.push(playerId);
        const oldLobbyId = this.players[playerId].lobbyId;
        this.DeleteLobby(oldLobbyId);
        this.players[playerId].lobbyId = lobby.lobbyId;
        this.StartGame(lobby);
    }
    StartGame(lobby) {
        lobby.players.forEach(playerId => {
            this.players[playerId].MatchFound(lobby.lobbyId);
            this.players[playerId].GameReady();
        });
        this.inGameLobbies[lobby.lobbyId] = true;
        this.EnterGame(lobby.players);
    }
    RequestLobbyId(playerId) {
        const lobby = new Lobby_1.Lobby([playerId], this.players[playerId].DefaultLobbyId());
        this.lobbies[lobby.lobbyId] = lobby;
        this.players[playerId].EnterMenu();
    }
    JoinLobby(playerId, lobbyId) {
        if (lobbyId in this.lobbies && !(lobbyId in this.inGameLobbies)) {
            const lobby = this.lobbies[lobbyId];
            this.AddToLobby(lobby, playerId);
        }
        else {
            this.RequestLobbyId(playerId);
        }
    }
}
exports.LobbyServer = LobbyServer;
class LobbySocketManager {
    constructor(socket, FindMatch, JoinLobby, RequestLobbyId, PlayerDisconnect, RequestRematch, DeclineRematch) {
        this.socket = socket;
        this.FindMatch = FindMatch;
        this.JoinLobby = JoinLobby;
        this.RequestLobbyId = RequestLobbyId;
        this.PlayerDisconnect = PlayerDisconnect;
        this.RequestRematch = RequestRematch;
        this.DeclineRematch = DeclineRematch;
        this.lobbyId = (0, LobbyId_1.GenerateLobbyId)(socket);
        this.RegisterSocket(socket);
    }
    DefaultLobbyId() {
        return (0, LobbyId_1.GenerateLobbyId)(this.socket);
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
        socket.on('RequestRematch', () => this.RequestRematch());
        socket.on('DeclineRematch', () => this.DeclineRematch());
        socket.on('disconnect', () => {
            this.PlayerDisconnect(this.GetPlayer());
        });
    }
    GameReady() {
        this.socket.emit('GameReady');
    }
}
//# sourceMappingURL=LobbyServer.js.map