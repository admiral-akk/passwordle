"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyManager = void 0;
const ClientId_1 = require("../struct/ClientId");
const LobbyNetwork_1 = require("./LobbyNetwork");
const LobbyView_1 = require("./view/LobbyView");
const LOBBY_ID_QUERY_NAME = 'lobbyId';
var LobbyState;
(function (LobbyState) {
    LobbyState[LobbyState["Start"] = 0] = "Start";
    LobbyState[LobbyState["JoiningMatch"] = 1] = "JoiningMatch";
    LobbyState[LobbyState["LobbyMenu"] = 2] = "LobbyMenu";
    LobbyState[LobbyState["FindingMatch"] = 3] = "FindingMatch";
    LobbyState[LobbyState["HostingMatch"] = 4] = "HostingMatch";
    LobbyState[LobbyState["MatchMade"] = 5] = "MatchMade";
    LobbyState[LobbyState["InGame"] = 6] = "InGame";
})(LobbyState || (LobbyState = {}));
class LobbyManager {
    constructor() {
        this.clientId = new ClientId_1.ClientId();
        this.view = new LobbyView_1.LobbyView();
        this.SetState(LobbyState.Start);
    }
    HostingLobby(clientId) {
        this.clientId = clientId;
        this.SetState(LobbyState.HostingMatch);
    }
    FindingMatch(clientId) {
        this.clientId = clientId;
        this.SetState(LobbyState.FindingMatch);
    }
    SetState(newState) {
        switch (newState) {
            case LobbyState.Start:
                const lobbyId = FindLobbyIdInURL();
                if (!lobbyId) {
                    this.SetState(LobbyState.LobbyMenu);
                    return;
                }
                this.clientId.lobbyId = lobbyId;
                this.SetState(LobbyState.JoiningMatch);
                break;
            case LobbyState.JoiningMatch:
                break;
            case LobbyState.LobbyMenu:
                this.view.Menu(() => (0, LobbyNetwork_1.HostLobby)((clientId) => this.HostingLobby(clientId)), () => (0, LobbyNetwork_1.FindMatch)((clientId) => this.FindingMatch(clientId)));
                break;
            case LobbyState.FindingMatch:
                break;
            case LobbyState.HostingMatch:
                this.view.HostingMatch(GenerateLobbyLink(this.clientId.lobbyId));
                break;
            case LobbyState.MatchMade:
                break;
            case LobbyState.InGame:
                break;
        }
    }
}
exports.LobbyManager = LobbyManager;
function FindLobbyIdInURL() {
    return new URLSearchParams(window.location.search).get(LOBBY_ID_QUERY_NAME);
}
function GenerateLobbyLink(lobbyId) {
    const url = new URLSearchParams(window.location.search);
    url.append(LOBBY_ID_QUERY_NAME, lobbyId);
    return window.location.href + url.toString();
}
//# sourceMappingURL=LobbyManager.js.map