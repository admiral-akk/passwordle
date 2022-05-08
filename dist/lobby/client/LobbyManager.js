"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewLobbyManager = void 0;
const LobbyView_1 = require("./view/LobbyView");
const Lobby_1 = require("../server/Lobby");
const EndGameView_1 = require("../../game/client/view/subview/EndGameView");
const PlayerState_1 = require("../../public/PlayerState");
class NewLobbyManager extends PlayerState_1.PlayerState {
    constructor(socket, setState) {
        super(socket, setState);
        this.view = new LobbyView_1.LobbyView();
        this.model = new Lobby_1.NewLobby(this.view, this);
    }
    Register(socket) {
        socket.on('EnterMenu', (lobbyId) => {
            this.model.EnterMenu(lobbyId);
        });
        socket.on('MatchFound', (lobbyId) => {
            this.model.MatchFound(lobbyId);
        });
    }
    Deregister(socket) {
        socket.removeAllListeners('EnterMenu');
        socket.removeAllListeners('MatchFound');
    }
    JoinLobby(lobbyId) {
        this.socket.emit('JoinLobby', lobbyId);
    }
    FindMatch() {
        this.socket.emit('FindMatch');
    }
    ShowMenu() {
        this.model.GameEnded(EndGameView_1.EndGameState.Won);
    }
}
exports.NewLobbyManager = NewLobbyManager;
//# sourceMappingURL=LobbyManager.js.map