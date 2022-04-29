"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndGameView = void 0;
const Subview_1 = require("./Subview");
class EndGameView extends Subview_1.Subview {
    constructor(base) {
        super(base, 'end-game');
        this.root.innerText = '';
    }
    GameOver(won) {
        if (won) {
            this.root.innerText = 'You won!';
        }
        else {
            this.root.innerText = 'You lost!';
        }
    }
}
exports.EndGameView = EndGameView;
//# sourceMappingURL=EndGameView.js.map