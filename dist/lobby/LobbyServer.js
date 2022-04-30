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
            const lobby = new Lobby_1.Lobby(socket);
            this.privateLobby[lobby.id] = lobby;
            socket.emit('PrivateLobbyId', lobby.id);
        });
        socket.on('HostPublicLobby', () => {
            if (this.publicLobby.length > 0) {
                this.Connect(this.publicLobby.pop(), socket);
            }
            else {
                this.publicLobby.push(new Lobby_1.Lobby(socket));
                socket.emit('PublicLobbyId');
            }
        });
        socket.on('JoinPrivateLobby', (lobbyId) => {
            if (lobbyId in this.privateLobby) {
                this.Connect(this.privateLobby[lobbyId], socket);
            }
            else {
                console.log(`Tried to connect to non-existent lobby: ${lobbyId}`);
            }
        });
    }
    Connect(lobby, otherPlayer) {
        lobby.AddPlayer(otherPlayer);
        lobby.players.forEach(s => {
            s.emit('LobbyReady');
        });
        this.handoffLobby(lobby);
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