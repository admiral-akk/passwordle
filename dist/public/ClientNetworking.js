"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSocket = void 0;
const socket_io_client_1 = require("socket.io-client");
function GetSocket() {
    const socket = (0, socket_io_client_1.io)();
    socket.on('connect', () => {
        console.log(`connected: ${socket.id}`);
    });
    socket.on('disconnect', () => {
        console.log(`disconnected: ${socket.id}`);
    });
    return socket;
}
exports.GetSocket = GetSocket;
//# sourceMappingURL=ClientNetworking.js.map