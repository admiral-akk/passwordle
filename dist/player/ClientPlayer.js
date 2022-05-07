"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientState = exports.ClientPlayer = exports.ExitState = exports.State = void 0;
const GameState_1 = require("./GameState");
const LobbyState_1 = require("./LobbyState");
var State;
(function (State) {
    State[State["Start"] = 0] = "Start";
    State[State["InLobby"] = 1] = "InLobby";
    State[State["InGame"] = 2] = "InGame";
})(State = exports.State || (exports.State = {}));
class ExitState {
    constructor(previousState) {
        this.previousState = previousState;
    }
}
exports.ExitState = ExitState;
class ClientPlayer {
    constructor(socket) {
        this.socket = socket;
        this.stateLogic = new StartState(this.socket);
        this.playerSocket = socket;
    }
    EnterLobby() {
        this.ChangeState(new LobbyState_1.LobbyState(this.socket));
    }
    EnterGame() {
        this.ChangeState(new GameState_1.GameState(this.socket));
    }
    ChangeState(newState) {
        const transfer = this.stateLogic.Exit(newState.State());
        newState.Enter(transfer);
        this.stateLogic = newState;
    }
}
exports.ClientPlayer = ClientPlayer;
class ClientState {
    constructor(socket) {
        this.socket = socket;
    }
    Enter(transfer) { }
    Exit(nextState) {
        return new ExitState(this.State());
    }
}
exports.ClientState = ClientState;
class StartState extends ClientState {
    State() {
        return State.Start;
    }
}
//# sourceMappingURL=ClientPlayer.js.map