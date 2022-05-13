"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeregisterGameServer = exports.RegisterGameServer = exports.DeregisterGameClient = exports.RegisterGameClient = void 0;
// How can we automate this so it simply registers every function in the interface?
function RegisterGameClient(socket, client) {
    socket.on('OpponentAddedChar', () => client.OpponentAddedChar());
    socket.on('OpponentDeleted', () => client.OpponentDeleted());
    socket.on('OpponentLockedGuess', () => client.OpponentLockedGuess());
    socket.on('SetSecret', (secret) => client.SetSecret(secret));
    socket.on('UpdatedAnswerKnowledge', (update) => client.UpdatedAnswerKnowledge(update));
    socket.on('OpponentDisconnected', () => client.OpponentDisconnected());
}
exports.RegisterGameClient = RegisterGameClient;
function DeregisterGameClient(socket) {
    socket.removeAllListeners('OpponentAddedChar');
    socket.removeAllListeners('OpponentDeleted');
    socket.removeAllListeners('OpponentLockedGuess');
    socket.removeAllListeners('SetSecret');
    socket.removeAllListeners('UpdatedAnswerKnowledge');
    socket.removeAllListeners('OpponentDisconnected');
}
exports.DeregisterGameClient = DeregisterGameClient;
function RegisterGameServer(socket, server) {
    socket.on('AddedChar', (update) => server.AddedChar(update));
    socket.on('Deleted', () => server.Deleted());
    socket.on('LockedGuess', (update) => server.LockedGuess(update));
    socket.on('GameClientReady', () => server.GameClientReady());
}
exports.RegisterGameServer = RegisterGameServer;
function DeregisterGameServer(socket) {
    socket.removeAllListeners('AddedChar');
    socket.removeAllListeners('Deleted');
    socket.removeAllListeners('LockedGuess');
    socket.removeAllListeners('GameClientReady');
}
exports.DeregisterGameServer = DeregisterGameServer;
//# sourceMappingURL=GameNetworkTypes.js.map