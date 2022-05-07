"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyState = void 0;
const ClientPlayer_1 = require("./ClientPlayer");
class LobbyState extends ClientPlayer_1.ClientState {
    State() {
        return ClientPlayer_1.State.InLobby;
    }
}
exports.LobbyState = LobbyState;
//# sourceMappingURL=LobbyState.js.map