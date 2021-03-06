"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalServer = void 0;
const socket_io_1 = require("socket.io");
const PlayerId_1 = require("../structs/PlayerId");
const LobbyServer_1 = require("../lobby/server/LobbyServer");
const GameServer_1 = require("./game/GameServer");
class GlobalServer {
    constructor(app) {
        this.playerSockets = {};
        const http = require('http').Server(app);
        this.server = new socket_io_1.Server(http);
        this.lobbyServer = new LobbyServer_1.LobbyServer((players) => this.EnterGame(players));
        this.gameServer = new GameServer_1.GameServer();
        this.server.on('connection', socket => {
            socket.data.playerId = (0, PlayerId_1.ToPlayerId)(socket);
            this.PlayerConnected(socket);
        });
        http.listen(4000, () => {
            console.log('listening on *:4000');
        });
    }
    EnterGame(players) {
        const gameSockets = players.map(player => this.playerSockets[player]);
        this.gameServer.StartGame(gameSockets);
    }
    PlayerConnected(socket) {
        socket.on('disconnect', () => {
            this.lobbyServer.PlayerDisconnected(socket.data.playerId);
            this.gameServer.PlayerDisconnected(socket.data.playerId);
            this.PlayerDisconnected(socket);
        });
        this.playerSockets[socket.data.playerId] = socket;
        this.lobbyServer.PlayerJoins(socket);
        socket.onAny((...args) => {
            args.forEach(arg => {
                console.log(`Arg: ${arg}`);
            });
        });
    }
    PlayerDisconnected(socket) {
        delete this.playerSockets[socket.data.playerId];
    }
}
exports.GlobalServer = GlobalServer;
//# sourceMappingURL=GlobalServer.js.map