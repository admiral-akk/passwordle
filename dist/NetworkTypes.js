"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameToLobby = exports.LobbyToGame = exports.GetServer = void 0;
const socket_io_1 = require("socket.io");
const GameServer_1 = require("./game/GameServer");
const LobbyServer_1 = require("./lobby/LobbyServer");
function GetServer(app, lobbyServer) {
    const http = require('http').Server(app);
    const io = new socket_io_1.Server(http);
    io.on('connection', socket => {
        lobbyServer.AddSocket(socket);
    });
    http.listen(4000, () => {
        console.log('listening on *:4000');
    });
    return io;
}
exports.GetServer = GetServer;
function LobbyToGame(lobby) {
    const gameSockets = lobby.players.map(lobbyServerSocket => lobbyServerSocket);
    gameSockets.forEach((s, i) => (s.data.playerIndex = i));
    return new GameServer_1.GameServer(gameSockets);
}
exports.LobbyToGame = LobbyToGame;
function GameToLobby(game) {
    const lobbySockets = game.players.map(gameServerSocket => gameServerSocket);
    const lobby = new LobbyServer_1.LobbyServer(lobbySockets[0]);
    lobby.AddPlayer(lobbySockets[1]);
    return lobby;
}
exports.GameToLobby = GameToLobby;
//# sourceMappingURL=NetworkTypes.js.map