"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetServer = void 0;
const socket_io_1 = require("socket.io");
const PlayerId_1 = require("./PlayerId");
function GetServer(app, lobbyServer) {
    const http = require('http').Server(app);
    const io = new socket_io_1.Server(http);
    io.on('connection', socket => {
        socket.data.playerId = (0, PlayerId_1.ToPlayerId)(socket.id);
        lobbyServer.AddSocket(socket);
    });
    http.listen(4000, () => {
        console.log('listening on *:4000');
    });
    return io;
}
exports.GetServer = GetServer;
//# sourceMappingURL=NetworkTypes.js.map