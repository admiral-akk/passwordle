"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewLobbyManager = void 0;
const LobbyView_1 = require("./view/LobbyView");
const Lobby_1 = require("../server/Lobby");
const EndGameView_1 = require("../../game/client/view/subview/EndGameView");
class NewLobbyManager {
    constructor(socket) {
        this.socket = socket;
        this.view = new LobbyView_1.LobbyView();
        this.model = new Lobby_1.NewLobby(this.view, this);
        RegisterSocket(socket, this.model);
    }
    Enter(prevState) {
        throw new Error('Method not implemented.');
    }
    Exit() {
        throw new Error('Method not implemented.');
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
function RegisterSocket(socket, model) {
    socket.on('EnterMenu', (lobbyId) => {
        model.EnterMenu(lobbyId);
    });
    socket.on('MatchFound', (lobbyId) => {
        model.MatchFound(lobbyId);
    });
}
//# sourceMappingURL=LobbyManager.js.map