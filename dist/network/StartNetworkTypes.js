"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeregisterStartServer = exports.RegisterStartServer = exports.DeregisterStartClient = exports.RegisterStartClient = void 0;
function RegisterStartClient(socket, client) {
    socket.on('ServerReady', () => client.ServerReady());
}
exports.RegisterStartClient = RegisterStartClient;
function DeregisterStartClient(socket) {
    socket.removeAllListeners('ServerReady');
}
exports.DeregisterStartClient = DeregisterStartClient;
function RegisterStartServer(socket, server) {
    socket.on('ClientReady', () => server.ClientReady());
}
exports.RegisterStartServer = RegisterStartServer;
function DeregisterStartServer(socket) {
    socket.removeAllListeners('ClientReady');
}
exports.DeregisterStartServer = DeregisterStartServer;
//# sourceMappingURL=StartNetworkTypes.js.map