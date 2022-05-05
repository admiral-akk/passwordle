"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientLobby = void 0;
const LobbyView_1 = require("../../lobby/client/view/LobbyView");
const Lobby_1 = require("../model/Lobby");
class ClientLobby {
    constructor(socket) {
        this.socket = socket;
        this.lobby = new Lobby_1.Lobby(new LobbyView_1.LobbyView(), () => {
            this.socket.emit('StartMatchmaking');
        });
        socket.on('LobbyCreated', (lobbyId) => this.LobbyCreated(lobbyId));
        socket.on('MatchFound', (lobbyId) => this.MatchFound(lobbyId));
        this.lobby.RequestMainMenu();
    }
    LobbyCreated(lobbyId) {
        this.lobby.LobbyCreated(lobbyId);
    }
    MatchFound(lobbyId) {
        this.lobby.MatchFound(lobbyId);
        this.lobby.StartGame();
        this.socket.emit('StartingGame');
    }
}
exports.ClientLobby = ClientLobby;
//# sourceMappingURL=ClientLobby.js.map