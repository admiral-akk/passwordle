"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewLobbyManager = void 0;
const LobbyView_1 = require("../lobby/client/view/LobbyView");
const NewLobby_1 = require("./NewLobby");
class NewLobbyManager {
    constructor(socket) {
        this.socket = socket;
        this.view = new LobbyView_1.LobbyView();
        this.model = new NewLobby_1.NewLobby(this.view, this);
        RegisterSocket(socket, this.model);
    }
    JoinLobby(lobbyId) {
        this.socket.emit('JoinLobby', lobbyId);
    }
    FindMatch() {
        this.socket.emit('FindMatch');
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
    socket.on('GameEnded', () => model.GameEnded());
}
//# sourceMappingURL=NewLobbyManager.js.map