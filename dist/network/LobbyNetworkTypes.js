"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeregisterLobbyServer = exports.RegisterLobbyServer = exports.DeregisterLobbyClient = exports.RegisterLobbyClient = void 0;
// How can we automate this so it simply registers every function in the interface?
function RegisterLobbyClient(socket, client) {
    socket.on('EnterMenu', (lobbyId) => client.EnterMenu(lobbyId));
    socket.on('MatchFound', (lobbyId) => client.MatchFound(lobbyId));
    socket.on('GameReady', () => client.GameReady());
    socket.on('FindingMatch', () => client.FindingMatch());
    socket.on('RematchRequested', () => client.RematchRequested());
}
exports.RegisterLobbyClient = RegisterLobbyClient;
function DeregisterLobbyClient(socket) {
    socket.removeAllListeners('EnterMenu');
    socket.removeAllListeners('MatchFound');
    socket.removeAllListeners('GameReady');
    socket.removeAllListeners('FindingMatch');
    socket.removeAllListeners('RematchRequested');
}
exports.DeregisterLobbyClient = DeregisterLobbyClient;
function RegisterLobbyServer(socket, server) {
    socket.on('RequestLobbyId', () => server.RequestLobbyId());
    socket.on('JoinLobby', (lobbyId) => server.JoinLobby(lobbyId));
    socket.on('FindMatch', () => server.FindMatch());
    socket.on('RequestRematch', () => server.RequestRematch());
    socket.on('DeclineRematch', () => server.DeclineRematch());
}
exports.RegisterLobbyServer = RegisterLobbyServer;
function DeregisterLobbyServer(socket) {
    socket.removeAllListeners('RequestLobbyId');
    socket.removeAllListeners('JoinLobby');
    socket.removeAllListeners('FindMatch');
    socket.removeAllListeners('RequestRematch');
    socket.removeAllListeners('DeclineRematch');
}
exports.DeregisterLobbyServer = DeregisterLobbyServer;
//# sourceMappingURL=LobbyNetworkTypes.js.map