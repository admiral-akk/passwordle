"use strict";
// https://stackoverflow.com/questions/61295715/typedef-equivalent-for-typescript
// https://evertpot.com/opaque-ts-types/
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateLobbyId = exports.GenerateLobbyLink = exports.FindLobbyIdInURL = void 0;
const LOBBY_ID_QUERY_NAME = 'lobbyId';
function assertValidLobbyId(input) { }
function FindLobbyIdInURL() {
    const lobbyId = new URLSearchParams(window.location.search).get(LOBBY_ID_QUERY_NAME);
    if (!lobbyId) {
        return null;
    }
    assertValidLobbyId(lobbyId);
    return lobbyId;
}
exports.FindLobbyIdInURL = FindLobbyIdInURL;
function GenerateLobbyLink(lobbyId) {
    const url = new URLSearchParams(window.location.search);
    url.append(LOBBY_ID_QUERY_NAME, lobbyId);
    return `${window.location.href}?${url.toString()}`;
}
exports.GenerateLobbyLink = GenerateLobbyLink;
function GenerateLobbyId(socket) {
    const lobbyId = socket.data.playerId;
    assertValidLobbyId(lobbyId);
    return lobbyId;
}
exports.GenerateLobbyId = GenerateLobbyId;
//# sourceMappingURL=LobbyId.js.map