"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const ClientNetworking_1 = require("./ClientNetworking");
const StartState_1 = require("./start/StartState");
class Player {
    constructor() {
        this.socket = (0, ClientNetworking_1.GetSocket)();
        this.state = new StartState_1.StartState(this.socket, (nextState) => this.SetState(nextState));
    }
    SetState(nextState) {
        this.state = nextState;
    }
}
exports.Player = Player;
//# sourceMappingURL=Player.js.map