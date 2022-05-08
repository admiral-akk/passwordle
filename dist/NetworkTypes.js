"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetServer = void 0;
const socket_io_1 = require("socket.io");
const PlayerId_1 = require("./PlayerId");
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