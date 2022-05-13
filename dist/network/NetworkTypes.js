"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetServer = exports.DeregisterServer = exports.RegisterServer = exports.DeregisterClient = exports.RegisterClient = void 0;
const socket_io_1 = require("socket.io");
const GameNetworkTypes_1 = require("./GameNetworkTypes");
const LobbyNetworkTypes_1 = require("./LobbyNetworkTypes");
const PlayerId_1 = require("../structs/PlayerId");
const StartNetworkTypes_1 = require("./StartNetworkTypes");
function RegisterClient(socket, client) {
    (0, GameNetworkTypes_1.RegisterGameClient)(socket, client);
    (0, LobbyNetworkTypes_1.RegisterLobbyClient)(socket, client);
    (0, StartNetworkTypes_1.RegisterStartClient)(socket, client);
}
exports.RegisterClient = RegisterClient;
function DeregisterClient(socket) {
    (0, GameNetworkTypes_1.DeregisterGameClient)(socket);
    (0, LobbyNetworkTypes_1.DeregisterLobbyClient)(socket);
    (0, StartNetworkTypes_1.DeregisterStartClient)(socket);
}
exports.DeregisterClient = DeregisterClient;
function RegisterServer(socket, server) {
    (0, GameNetworkTypes_1.RegisterGameServer)(socket, server);
    (0, LobbyNetworkTypes_1.RegisterLobbyServer)(socket, server);
    (0, StartNetworkTypes_1.RegisterStartServer)(socket, server);
}
exports.RegisterServer = RegisterServer;
function DeregisterServer(socket) {
    (0, GameNetworkTypes_1.DeregisterGameServer)(socket);
    (0, LobbyNetworkTypes_1.DeregisterLobbyServer)(socket);
    (0, StartNetworkTypes_1.DeregisterStartServer)(socket);
}
exports.DeregisterServer = DeregisterServer;
function GetServer(app, socketManager, lobbyServer) {
    const http = require('http').Server(app);
    const io = new socket_io_1.Server(http);
    io.on('connection', socket => {
        socket.onAny((...args) => {
            args.forEach(arg => {
                console.log(`Arg: ${arg}`);
            });
        });
        socket.data.playerId = (0, PlayerId_1.ToPlayerId)(socket.id);
        socketManager.AddSocket(socket);
        lobbyServer.PlayerJoins(socket);
        socket.on('ClientReady', () => socket.emit('ServerReady'));
        socket.emit('ServerReady');
    });
    http.listen(4000, () => {
        console.log('listening on *:4000');
    });
    return io;
}
exports.GetServer = GetServer;
//# sourceMappingURL=NetworkTypes.js.map