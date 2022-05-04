"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientGameState = void 0;
const AddCharError_1 = require("./update/AddCharError");
const DeleteError_1 = require("./update/DeleteError");
const SubmitError_1 = require("./update/SubmitError");
var State;
(function (State) {
    State[State["CanInput"] = 0] = "CanInput";
    State[State["WaitingForOpponent"] = 1] = "WaitingForOpponent";
})(State || (State = {}));
class ClientGameState {
    constructor(playerId, playerBoard, opponentBoard, addCharCallback, deleteCallback, submitCallback) {
        this.playerId = playerId;
        this.playerBoard = playerBoard;
        this.opponentBoard = opponentBoard;
        this.addCharCallback = addCharCallback;
        this.deleteCallback = deleteCallback;
        this.submitCallback = submitCallback;
        this.state = State.CanInput;
    }
    OpponentUpdate(update) { }
    ServerUpdate() { }
    AddChar(char) {
        const response = this.playerBoard.AddChar(char);
        if (typeof response === AddCharError_1.AddCharError.name) {
            return response;
        }
        else {
            this.addCharCallback(response);
            return null;
        }
    }
    Delete() {
        const response = this.playerBoard.Delete();
        if (typeof response === DeleteError_1.DeleteError.name) {
            return response;
        }
        else {
            this.deleteCallback(response);
            return null;
        }
    }
    Submit() {
        const response = this.playerBoard.Submit();
        if (typeof response === SubmitError_1.SubmitError.name) {
            return response;
        }
        else {
            this.submitCallback(response);
            return null;
        }
    }
}
exports.ClientGameState = ClientGameState;
//# sourceMappingURL=ClientGameState.js.map