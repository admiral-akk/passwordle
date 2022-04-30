"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyServerManager = void 0;
const LobbyServer_1 = require("./lobby/LobbyServer");
class LobbyServerManager {
    constructor(startGame) {
        this.lobbies = {};
        this.matchmakingLobbyIds = [];
        this.startGame = startGame;
    }
    AddSocket(socket) {
        this.RegisterLobbyHandlers(socket);
        socket.data.isReady = true;
        const lobby = new LobbyServer_1.LobbyServer([socket]);
        this.lobbies[socket.id] = lobby;
    }
    AddLobby(lobby) {
        lobby.players.forEach(p => {
            if (p.id in this.lobbies) {
                this.lobbies[p.id] = lobby;
            }
        });
    }
    RematchMenu(players) {
        players.forEach(p => (p.data.isReady = false));
        const lobby = new LobbyServer_1.LobbyServer(players);
        lobby.players.forEach(p => {
            if (p.id in this.lobbies) {
                this.lobbies[p.id] = lobby;
            }
        });
    }
    CreatePrivateLobby(socket) {
        socket.emit('PrivateLobbyId', socket.id);
    }
    EnterMatchmaking(socket) {
        if (this.matchmakingLobbyIds.length > 0) {
            const lobbyId = this.matchmakingLobbyIds.pop();
            this.Connect(this.lobbies[lobbyId], socket);
        }
        else {
            this.matchmakingLobbyIds.push(socket.id);
            socket.emit('PublicLobbyId');
        }
    }
    JoinPrivateLobby(socket, lobbyId) {
        if (lobbyId in this.lobbies) {
            this.Connect(this.lobbies[lobbyId], socket);
        }
        else {
            console.log(`Tried to connect to non-existent lobby: ${lobbyId}`);
        }
    }
    RegisterLobbyHandlers(socket) {
        socket.on('HostPrivateLobby', () => this.CreatePrivateLobby(socket));
        socket.on('HostPublicLobby', () => this.EnterMatchmaking(socket));
        socket.on('JoinPrivateLobby', (lobbyId) => this.JoinPrivateLobby(socket, lobbyId));
        socket.on('AcceptRematch', () => this.AcceptRematch(socket));
        socket.on('RejectRematch', () => this.RejectRematch(socket));
    }
    AcceptRematch(socket) {
        socket.data.isReady = true;
        if (this.lobbies[socket.id].Ready()) {
            this.StartGame(this.lobbies[socket.id]);
        }
        else {
            this.lobbies[socket.id].players.forEach(p => {
                if (p !== socket) {
                    p.emit('RematchRequested');
                }
            });
        }
    }
    RejectRematch(socket) {
        socket.data.isReady = false;
        const players = this.lobbies[socket.id].players;
        players.forEach(p => {
            this.lobbies[p.id] = new LobbyServer_1.LobbyServer([p]);
            p.emit('RematchRefused');
        });
    }
    Connect(lobby, otherPlayer) {
        lobby.AddPlayer(otherPlayer);
        this.StartGame(lobby);
    }
    StartGame(lobby) {
        lobby.players.forEach(s => {
            s.emit('LobbyReady');
        });
        this.startGame(lobby.players);
        this.RemoveLobby(lobby);
    }
    RemoveLobby(lobby) {
        lobby.players.forEach(p => {
            if (p.id in this.lobbies) {
                delete this.lobbies[p.id];
            }
        });
    }
}
exports.LobbyServerManager = LobbyServerManager;
//# sourceMappingURL=LobbyServerManager.js.map