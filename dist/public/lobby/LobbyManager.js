"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyManager = void 0;
const ClientId_1 = require("../struct/ClientId");
const LobbyView_1 = require("./view/LobbyView");
const LOBBY_ID_QUERY_NAME = 'lobbyId';
var LobbyState;
(function (LobbyState) {
    LobbyState[LobbyState["Start"] = 0] = "Start";
    LobbyState[LobbyState["JoiningMatch"] = 1] = "JoiningMatch";
    LobbyState[LobbyState["LobbyMenu"] = 2] = "LobbyMenu";
    LobbyState[LobbyState["FindingMatch"] = 3] = "FindingMatch";
    LobbyState[LobbyState["HostingMatch"] = 4] = "HostingMatch";
    LobbyState[LobbyState["LobbyReady"] = 5] = "LobbyReady";
    LobbyState[LobbyState["InGame"] = 6] = "InGame";
})(LobbyState || (LobbyState = {}));
class LobbyManager {
    constructor(socket) {
        this.clientId = new ClientId_1.ClientId();
        this.view = new LobbyView_1.LobbyView();
        this.socket = socket;
        RegisterGetPrivateLobbyId(this.socket, (lobbyId) => this.HostingLobby(lobbyId));
        RegisterGetPublicLobbyId(this.socket, () => this.FindingMatch());
        RegisterLobbyReady(this.socket, () => this.LobbyReady());
        this.SetState(LobbyState.Start);
    }
    HostingLobby(lobbyId) {
        console.log(`Hosting private lobby, ID: ${lobbyId}`);
        this.clientId.lobbyId = lobbyId;
        this.SetState(LobbyState.HostingMatch);
    }
    FindingMatch() {
        this.SetState(LobbyState.FindingMatch);
    }
    LobbyReady() {
        this.SetState(LobbyState.LobbyReady);
    }
    SetState(newState) {
        switch (newState) {
            case LobbyState.Start:
                {
                    const lobbyId = FindLobbyIdInURL();
                    if (!lobbyId) {
                        this.SetState(LobbyState.LobbyMenu);
                        return;
                    }
                    this.clientId.lobbyId = lobbyId;
                    this.SetState(LobbyState.JoiningMatch);
                }
                break;
            case LobbyState.JoiningMatch:
                JoinPrivateLobby(this.socket, this.clientId.lobbyId);
                break;
            case LobbyState.LobbyMenu:
                this.view.Menu(() => RequestPrivateLobby(this.socket), () => RequestPublicLobby(this.socket));
                break;
            case LobbyState.FindingMatch:
                this.view.FindingMatch();
                break;
            case LobbyState.HostingMatch:
                this.view.HostingMatch(GenerateLobbyLink(this.clientId.lobbyId));
                break;
            case LobbyState.LobbyReady:
                this.view.LobbyReady();
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
    return `${window.location.href}?${url.toString()}`;
}
function RegisterLobbyReady(socket, callback) {
    socket.on('LobbyReady', () => {
        callback();
    });
}
function RequestPublicLobby(socket) {
    socket.emit('HostPublicLobby');
}
function RequestPrivateLobby(socket) {
    socket.emit('HostPrivateLobby');
}
function JoinPrivateLobby(socket, lobbyId) {
    socket.emit('JoinPrivateLobby', lobbyId);
}
function RegisterGetPrivateLobbyId(socket, callback) {
    socket.on('PrivateLobbyId', lobbyId => {
        callback(lobbyId);
    });
}
function RegisterGetPublicLobbyId(socket, callback) {
    socket.on('PublicLobbyId', () => {
        callback();
    });
}
//# sourceMappingURL=LobbyManager.js.map