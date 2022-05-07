"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameState = void 0;
const ClientPlayer_1 = require("./ClientPlayer");
class GameState extends ClientPlayer_1.ClientState {
    State() {
        return ClientPlayer_1.State.InGame;
    }
}
exports.GameState = GameState;
//# sourceMappingURL=GameState.js.map