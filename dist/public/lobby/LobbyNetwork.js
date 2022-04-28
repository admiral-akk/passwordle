"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyNetwork = exports.FindMatch = exports.HostLobby = exports.FIND_MATCH_ENDPOINT_NAME = exports.HOST_LOBBY_ENDPOINT_NAME = void 0;
const ClientId_1 = require("../struct/ClientId");
exports.HOST_LOBBY_ENDPOINT_NAME = '/host';
exports.FIND_MATCH_ENDPOINT_NAME = '/find_match';
function HostLobby(callback) {
    Post(exports.HOST_LOBBY_ENDPOINT_NAME, callback);
}
exports.HostLobby = HostLobby;
function FindMatch(callback) {
    Post(exports.FIND_MATCH_ENDPOINT_NAME, callback);
}
exports.FindMatch = FindMatch;
function Post(path, callback, data = new ClientId_1.ClientId()) {
    window
        .fetch(path, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .then(clientId => {
        console.log(`Recieved response: ${JSON.stringify(clientId)}`);
        callback(clientId);
    });
}
class LobbyNetwork {
    constructor(socket) {
        this.socket = socket;
    }
    HostLobby(callback) {
    }
}
exports.LobbyNetwork = LobbyNetwork;
//# sourceMappingURL=LobbyNetwork.js.map