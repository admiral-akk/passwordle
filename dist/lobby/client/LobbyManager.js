"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyManager = void 0;
const LobbyView_1 = require("./view/LobbyView");
const Lobby_1 = require("../server/Lobby");
const EndGameView_1 = require("../../game/client/view/subview/EndGameView");
const PlayerState_1 = require("../../public/PlayerState");
const ClientGame_1 = require("../../game/client/ClientGame");
const LobbyId_1 = require("../LobbyId");
class LobbyManager extends PlayerState_1.PlayerState {
    constructor() {
        super();
        this.view = new LobbyView_1.LobbyView();
        this.model = new Lobby_1.Lobby(this.view, this);
    }
    Register(socket) {
        socket.on('EnterMenu', (lobbyId) => {
            this.EnterMenu(lobbyId);
        });
        socket.on('MatchFound', (lobbyId) => {
            this.MatchFound(lobbyId);
        });
        socket.on('FindingMatch', () => {
            this.FindingMatch();
        });
    }
    Deregister(socket) {
        socket.removeAllListeners('EnterMenu');
        socket.removeAllListeners('MatchFound');
        socket.removeAllListeners('FindingMatch');
    }
    Enter() {
        const lobbyId = (0, LobbyId_1.FindLobbyIdInURL)();
        if (lobbyId) {
            this.JoinLobby(lobbyId);
        }
        else {
            this.RequestLobbyId();
        }
    }
    Exit() {
        this.model.Exit();
    }
    RequestLobbyId() {
        this.socket.emit('RequestLobbyId');
    }
    EnterMenu(lobbyId) {
        this.model.EnterMenu(lobbyId);
    }
    MatchFound(lobbyId) {
        this.model.MatchFound(lobbyId);
        this.SwitchState(new ClientGame_1.ClientGame());
    }
    JoinLobby(lobbyId) {
        this.socket.emit('JoinLobby', lobbyId);
    }
    FindMatch() {
        this.socket.emit('FindMatch');
    }
    FindingMatch() {
        this.model.FindingMatch();
    }
    ShowMenu() {
        this.model.GameEnded(EndGameView_1.EndGameState.Won);
    }
}
exports.LobbyManager = LobbyManager;
//# sourceMappingURL=LobbyManager.js.map