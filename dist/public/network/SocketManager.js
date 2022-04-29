"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketManager = void 0;
const socket_io_client_1 = require("socket.io-client");
class SocketManager {
    constructor() {
        this.socket = (0, socket_io_client_1.io)('http://localhost:4000/', { transports: ['websocket'] });
        this.socket.on('connect', () => {
            console.log(`connected: ${this.socket.id}`);
        });
        this.socket.on('disconnect', () => {
            console.log(`disconnected: ${this.socket.id}`);
        });
    }
    RequestPublicLobby() {
        this.socket.emit('HostPublicLobby');
    }
    RequestPrivateLobby() {
        this.socket.emit('HostPrivateLobby');
    }
    RegisterGetPrivateLobbyId(callback) {
        this.socket.on('PrivateLobbyId', lobbyId => {
            callback(lobbyId);
        });
    }
    RegisterGetPublicLobbyId(callback) {
        this.socket.on('PublicLobbyId', () => {
            callback();
        });
    }
}
exports.SocketManager = SocketManager;
//# sourceMappingURL=SocketManager.js.map