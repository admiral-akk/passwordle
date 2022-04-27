"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchLobbyId = exports.GenerateRandomLobbyId = exports.ToLobbyId = void 0;
// Just for the type system.
function assertValidLobbyId(input) { }
function ToLobbyId(id) {
    assertValidLobbyId(id);
    return id;
}
exports.ToLobbyId = ToLobbyId;
function GenerateRandomLobbyId() {
    return ToLobbyId(Math.floor(Math.random() * 100000).toString());
}
exports.GenerateRandomLobbyId = GenerateRandomLobbyId;
function FetchLobbyId() {
    const urlParams = new URLSearchParams(window.location.search);
    if ('lobbyId' in urlParams) {
        const lobbyId = urlParams.get('lobbyId');
        return ToLobbyId(lobbyId);
    }
    else {
        return null;
    }
}
exports.FetchLobbyId = FetchLobbyId;
//# sourceMappingURL=LobbyId.js.map