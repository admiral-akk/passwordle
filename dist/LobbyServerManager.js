"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyServerManager = void 0;
const LobbyServer_1 = require("./lobby/LobbyServer");
class LobbyServerManager {
    constructor(handoffLobby) {
        this.lobbies = {};
        this.matchmakingLobbyIds = [];
        this.handoffLobby = handoffLobby;
    }
    CreatePrivateLobby(socket) {
        socket.emit('PrivateLobbyId', this.lobbies[socket.id].id);
    }
    EnterMatchmaking(socket) {
        if (this.matchmakingLobbyIds.length > 0) {
            const lobbyId = this.matchmakingLobbyIds.pop();
            this.Connect(this.lobbies[lobbyId], socket);
            delete this.lobbies[lobbyId];
        }
        else {
            this.matchmakingLobbyIds.push(socket.id);
            socket.emit('PublicLobbyId');
        }
    }
    JoinPrivateLobby(socket, lobbyId) {
        if (lobbyId in this.lobbies) {
            this.Connect(this.lobbies[lobbyId], socket);
            delete this.lobbies[lobbyId];
        }
        else {
            console.log(`Tried to connect to non-existent lobby: ${lobbyId}`);
        }
    }
    AddSocket(socket) {
        this.RegisterLobbyHandlers(socket);
        const lobby = new LobbyServer_1.LobbyServer(socket);
        this.lobbies[lobby.id] = lobby;
    }
    RegisterLobbyHandlers(socket) {
        socket.on('HostPrivateLobby', () => this.CreatePrivateLobby(socket));
        socket.on('HostPublicLobby', () => this.EnterMatchmaking(socket));
        socket.on('JoinPrivateLobby', (lobbyId) => this.JoinPrivateLobby(socket, lobbyId));
    }
    Connect(lobby, otherPlayer) {
        lobby.AddPlayer(otherPlayer);
        lobby.players.forEach(s => {
            s.emit('LobbyReady');
        });
        this.handoffLobby(lobby);
    }
}
exports.LobbyServerManager = LobbyServerManager;
//# sourceMappingURL=LobbyServerManager.js.map