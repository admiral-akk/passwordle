"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameUpdateEmitter = exports.DeregisterGameServer = exports.RegisterGameServer = exports.DeregisterGameClient = exports.RegisterGameClient = void 0;
// How can we automate this so it simply registers every function in the interface?
function RegisterGameClient(socket, client) {
    socket.on('AddedChar', (update) => client.AddedChar(update));
    socket.on('Deleted', () => client.Deleted());
    socket.on('LockedGuess', (update) => client.LockedGuess(update));
    socket.on('OpponentAddedChar', () => client.OpponentAddedChar());
    socket.on('OpponentDeleted', () => client.OpponentDeleted());
    socket.on('OpponentLockedGuess', () => client.OpponentLockedGuess());
    socket.on('SetSecret', (secret) => client.SetSecret(secret));
    socket.on('UpdatedAnswerKnowledge', (update) => client.UpdatedAnswerKnowledge(update));
    socket.on('OpponentDisconnected', () => client.OpponentDisconnected());
}
exports.RegisterGameClient = RegisterGameClient;
function DeregisterGameClient(socket) {
    socket.removeAllListeners('AddedChar');
    socket.removeAllListeners('Deleted');
    socket.removeAllListeners('LockedGuess');
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
class GameUpdateEmitter {
    constructor(socket) {
        this.socket = socket;
        this.AddedChar = (update) => this.socket.emit('AddedChar', update);
        this.Deleted = () => this.socket.emit('Deleted');
        this.LockedGuess = (update) => this.socket.emit('LockedGuess', update);
        this.OpponentAddedChar = () => this.socket.emit('OpponentAddedChar');
        this.OpponentDeleted = () => this.socket.emit('OpponentDeleted');
        this.OpponentLockedGuess = () => this.socket.emit('OpponentLockedGuess');
        this.SetSecret = (secret) => this.socket.emit('SetSecret', secret);
        this.UpdatedAnswerKnowledge = (update) => this.socket.emit('UpdatedAnswerKnowledge', update);
        this.OpponentDisconnected = () => this.socket.emit('OpponentDisconnected');
    }
}
exports.GameUpdateEmitter = GameUpdateEmitter;
//# sourceMappingURL=GameNetworkTypes.js.map