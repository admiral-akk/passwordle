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
        this.lobbies[playerId] = new LobbySocketManager(socket, () => this.FindMatch(playerId), (lobbyId) => this.JoinLobby(playerId, lobbyId), (playerId) => this.PlayerDisconnected(playerId));
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
        for (let i = 0; i < lobbies.length; i++) {
            lobbies[i].GameEnded(ending[players[i]]);
        }
    }
    FindMatch(playerId) {
        const lobby = this.lobbies[playerId];
        if (this.publicLobbies.length === 0) {
            this.publicLobbies.push(lobby);
        }
        else {
            const other = this.publicLobbies.pop();
            this.ConnectLobbies(lobby, other);
        }
    }
    JoinLobby(playerId, lobbyId) {
        const playerLobby = this.lobbies[playerId];
        if (lobbyId in this.lobbies) {
            this.ConnectLobbies(playerLobby, this.lobbies[lobbyId]);
        }
        else {
            playerLobby.EnterMenu(playerLobby.lobbyId);
        }
    }
    ConnectLobbies(lobby, other) {
        lobby.lobbyId = other.lobbyId;
        lobby.MatchFound(lobby.lobbyId);
        other.MatchFound(other.lobbyId);
        this.EnterGame([lobby.GetPlayer(), other.GetPlayer()]);
    }
}
exports.NewLobbyServer = NewLobbyServer;
class LobbySocketManager {
    constructor(socket, FindMatch, JoinLobby, PlayerDisconnect) {
        this.socket = socket;
        this.FindMatch = FindMatch;
        this.JoinLobby = JoinLobby;
        this.PlayerDisconnect = PlayerDisconnect;
        this.lobbyId = socket.data.playerId;
        this.RegisterSocket(socket);
        socket.emit('EnterMenu', socket.data.playerId);
    }
    GetPlayer() {
        return this.socket.data.playerId;
    }
    GameEnded(ending) {
        this.socket.emit('GameEnded', ending);
    }
    EnterMenu(lobbyId) {
        this.socket.emit('EnterMenu', lobbyId);
    }
    MatchFound(lobbyId) {
        this.socket.emit('MatchFound', lobbyId);
    }
    RegisterSocket(socket) {
        socket.on('FindMatch', () => this.FindMatch());
        socket.on('JoinLobby', (lobbyId) => this.JoinLobby(lobbyId));
        socket.on('disconnect', () => {
            this.PlayerDisconnect(this.GetPlayer());
        });
    }
}
//# sourceMappingURL=LobbyServer.js.map