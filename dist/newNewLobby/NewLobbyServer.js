"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewLobbyServer = void 0;
class NewLobbyServer {
    constructor(EnterGame) {
        this.EnterGame = EnterGame;
        this.lobbies = {};
        this.publicLobbies = [];
    }
    PlayerJoins(socket) {
        const playerId = socket.data.playerId;
        this.lobbies[playerId] = new LobbySocketManager(socket, () => this.FindMatch(playerId));
    }
    EndGame(sockets) {
        const players = sockets.map(socket => socket.data.playerId);
        const lobbies = players.map(player => this.lobbies[player]);
        lobbies.forEach(lobby => lobby.GameEnded());
    }
    FindMatch(playerId) {
        const lobby = this.lobbies[playerId];
        if (this.publicLobbies.length === 0) {
            this.publicLobbies.push(lobby);
        }
        else {
            const other = this.publicLobbies.pop();
            lobby.lobbyId = other.lobbyId;
            lobby.MatchFound(lobby.lobbyId);
            other.MatchFound(other.lobbyId);
            this.EnterGame([lobby.GetPlayer(), other.GetPlayer()]);
        }
    }
}
exports.NewLobbyServer = NewLobbyServer;
class LobbySocketManager {
    constructor(socket, FindMatch) {
        this.socket = socket;
        this.FindMatch = FindMatch;
        this.lobbyId = socket.data.playerId;
        this.RegisterSocket(socket);
        socket.emit('EnterMenu', this.lobbyId);
    }
    GetPlayer() {
        return this.socket.data.playerId;
    }
    GameEnded() {
        this.socket.emit('GameEnded');
    }
    EnterMenu(lobbyId) {
        this.socket.emit('EnterMenu', lobbyId);
    }
    MatchFound(lobbyId) {
        this.socket.emit('MatchFound', lobbyId);
    }
    RegisterSocket(socket) {
        socket.on('FindMatch', () => this.FindMatch());
    }
}
//# sourceMappingURL=NewLobbyServer.js.map