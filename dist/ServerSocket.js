"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerSocket = void 0;
class ServerSocket {
    constructor(socket) {
        this.socket = socket;
        console.log(`connected: ${socket.id}`);
        this.socket.on(`HostPrivateLobby`, () => {
            console.log(`HostPrivateLobby request from: ${socket.id}`);
            this.socket.emit(`PrivateLobbyId`, "HI");
        });
        this.socket.on(`HostPublicLobby`, () => {
            console.log(`HostPublicLobby request from: ${socket.id}`);
            this.socket.emit(`PublicLobbyId`, "HELLO");
        });
    }
}
exports.ServerSocket = ServerSocket;
//# sourceMappingURL=ServerSocket.js.map