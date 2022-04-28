"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyManager = void 0;
const LobbyView_1 = require("./LobbyView");
class LobbyManager {
    constructor() {
        this.view = new LobbyView_1.LobbyView(this.CreateLobby, this.Matchmake);
    }
    CreateLobby() { }
    Matchmake() { }
}
exports.LobbyManager = LobbyManager;
//# sourceMappingURL=LobbyManager.js.map