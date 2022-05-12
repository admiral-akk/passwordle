"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorialState = void 0;
const GameView_1 = require("../game/model/view/GameView");
class TutorialState {
    constructor(root) {
        const container = document.createElement('div');
        container.className = 'game-container';
        root.appendChild(container);
        this.leftBoard = new GameView_1.GameView(container, 'left-board');
        this.rightBoard = new GameView_1.GameView(container, 'right-board');
    }
}
exports.TutorialState = TutorialState;
//# sourceMappingURL=TutorialState.js.map