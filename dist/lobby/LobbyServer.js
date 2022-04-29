"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyServer = void 0;
const Lobby_1 = require("./Lobby");
class LobbyServer {
    constructor(handoffLobby) {
        this.privateLobby = {};
        this.publicLobby = [];
        this.handoffLobby = handoffLobby;
    }
    AddSocket(socket) {
        this.RegisterLobbyHandlers(socket);
    }
    RegisterLobbyHandlers(socket) {
        socket.on('HostPrivateLobby', () => {
            console.log(`HostPrivateLobby request from: ${socket.id}`);
            const lobby = new Lobby_1.Lobby();
            lobby.players.push(socket);
            const lobbyId = GenerateLobbyId(Object.keys(this.privateLobby));
            this.privateLobby[lobbyId] = lobby;
            socket.emit('PrivateLobbyId', lobbyId);
        });
        socket.on('HostPublicLobby', () => {
            console.log(`befor public lobby request, length: ${this.publicLobby.length}`);
            if (this.publicLobby.length > 0) {
                const lobby = this.publicLobby.pop();
                lobby.players.push(socket);
                lobby.players.forEach(s => {
                    s.emit('LobbyReady');
                });
                this.handoffLobby(lobby);
            }
            else {
                const lobby = new Lobby_1.Lobby();
                lobby.players.push(socket);
                this.publicLobby.push(lobby);
                socket.emit('PublicLobbyId');
            }
            console.log(`after public lobby request, length: ${this.publicLobby.length}`);
        });
        socket.on('JoinPrivateLobby', (lobbyId) => {
            if (lobbyId in this.privateLobby) {
                this.privateLobby[lobbyId].players.push(socket);
                this.privateLobby[lobbyId].players.forEach(s => {
                    s.emit('LobbyReady');
                });
            }
            else {
                console.log(`Tried to connect to non-existent lobby: ${lobbyId}`);
            }
        });
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