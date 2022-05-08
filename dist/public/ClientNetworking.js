"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSocket = void 0;
const socket_io_client_1 = require("socket.io-client");
function GetSocket() {
    let socket;
    if (window.location.href.includes('localhost')) {
        socket = (0, socket_io_client_1.io)('http://localhost:4000/', { transports: ['websocket'] });
    }
    else {
        socket = (0, socket_io_client_1.io)();
    }
    socket.onAny((...args) => {
        args.forEach(arg => {
            console.log(`Arg: ${arg}`);
        });
    });
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