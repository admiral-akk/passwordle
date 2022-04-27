"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyManager = void 0;
class LobbyManager {
    constructor() {
        this.state = LobbyState.None;
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has(LOBBY_ID_URL_NAME)) {
            this.state = LobbyState.JoiningExistingLobby;
        }
        else {
            this.state = LobbyState.RequestingLobby;
        }
    }
}
exports.LobbyManager = LobbyManager;
const LOBBY_ID_URL_NAME = 'lobbyId';
var LobbyState;
(function (LobbyState) {
    LobbyState[LobbyState["None"] = 0] = "None";
    LobbyState[LobbyState["RequestingLobby"] = 1] = "RequestingLobby";
    LobbyState[LobbyState["WaitingInLobby"] = 2] = "WaitingInLobby";
    LobbyState[LobbyState["JoiningExistingLobby"] = 3] = "JoiningExistingLobby";
    LobbyState[LobbyState["EnteringGame"] = 4] = "EnteringGame";
})(LobbyState || (LobbyState = {}));
//# sourceMappingURL=LobbyManager.js.map