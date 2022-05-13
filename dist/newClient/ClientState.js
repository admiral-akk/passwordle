"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientState = void 0;
var State;
(function (State) {
    State[State["None"] = 0] = "None";
    State[State["InLobby"] = 1] = "InLobby";
    State[State["InGame"] = 2] = "InGame";
    State[State["InRematchMenu"] = 3] = "InRematchMenu";
})(State || (State = {}));
class ClientState {
    constructor() {
        this.state = State.None;
    }
}
exports.ClientState = ClientState;
//# sourceMappingURL=ClientState.js.map