"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyServerWrapper = exports.LobbyClientWrapper = void 0;
const LobbyDeserializeCommand_1 = require("./lobby/LobbyDeserializeCommand");
class LobbyClientWrapper {
    constructor(socket, callback) {
        this.socket = socket;
        socket.on('LobbyConfirm', (command) => {
            const deserialized = (0, LobbyDeserializeCommand_1.Deserialize)(command);
            callback(deserialized);
        });
    }
    Emit(command) {
        this.socket.emit('LobbyAction', command);
    }
}
exports.LobbyClientWrapper = LobbyClientWrapper;
class LobbyServerWrapper {
    constructor(socket, callback) {
        this.socket = socket;
        socket.on('LobbyAction', (command) => {
            const deserialized = (0, LobbyDeserializeCommand_1.Deserialize)(command);
            callback(deserialized);
        });
    }
    Emit(command) {
        this.socket.emit('LobbyConfirm', command);
    }
}
exports.LobbyServerWrapper = LobbyServerWrapper;
//# sourceMappingURL=CommandNetwork.js.map