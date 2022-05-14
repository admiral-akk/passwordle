"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeregisterServer = exports.RegisterServer = exports.DeregisterClient = exports.RegisterClient = void 0;
const GameNetworkTypes_1 = require("./GameNetworkTypes");
const LobbyNetworkTypes_1 = require("./LobbyNetworkTypes");
function RegisterClient(socket, client) {
    (0, GameNetworkTypes_1.RegisterGameClient)(socket, client);
    (0, LobbyNetworkTypes_1.RegisterLobbyClient)(socket, client);
}
exports.RegisterClient = RegisterClient;
function DeregisterClient(socket) {
    (0, GameNetworkTypes_1.DeregisterGameClient)(socket);
    (0, LobbyNetworkTypes_1.DeregisterLobbyClient)(socket);
}
exports.DeregisterClient = DeregisterClient;
function RegisterServer(socket, server) {
    (0, GameNetworkTypes_1.RegisterGameServer)(socket, server);
    (0, LobbyNetworkTypes_1.RegisterLobbyServer)(socket, server);
}
exports.RegisterServer = RegisterServer;
function DeregisterServer(socket) {
    (0, GameNetworkTypes_1.DeregisterGameServer)(socket);
    (0, LobbyNetworkTypes_1.DeregisterLobbyServer)(socket);
}
exports.DeregisterServer = DeregisterServer;
//# sourceMappingURL=NetworkTypes.js.map