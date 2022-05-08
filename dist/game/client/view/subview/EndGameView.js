"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndGameView = exports.EndGameState = void 0;
const Subview_1 = require("../../../model/view/Subview");
var EndGameState;
(function (EndGameState) {
    EndGameState[EndGameState["Lost"] = 0] = "Lost";
    EndGameState[EndGameState["Won"] = 1] = "Won";
    EndGameState[EndGameState["Tied"] = 2] = "Tied";
    EndGameState[EndGameState["Disconnected"] = 3] = "Disconnected";
})(EndGameState = exports.EndGameState || (exports.EndGameState = {}));
class EndGameView extends Subview_1.Subview {
    constructor(base) {
        super(base, 'end-game');
        this.root.innerText = '';
    }
    GameOver(state) {
        switch (state) {
            case EndGameState.Lost:
                this.root.innerText = 'You lost!';
                break;
            case EndGameState.Won:
                this.root.innerText = 'You won!';
                break;
            case EndGameState.Tied:
                this.root.innerText = 'You tied!';
                break;
            case EndGameState.Disconnected:
                this.root.innerText = 'Opponent disconnected!';
                break;
        }
    }
    Reset() {
        this.root.innerText = '';
    }
}
exports.EndGameView = EndGameView;
//# sourceMappingURL=EndGameView.js.map