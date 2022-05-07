"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameEndedModal = void 0;
const EndGameView_1 = require("../../../../game/client/view/subview/EndGameView");
const Modal_1 = require("./Modal");
class GameEndedModal extends Modal_1.BaseModal {
    constructor(modal, endingType) {
        super();
        let text;
        switch (endingType) {
            case EndGameView_1.EndGameState.Disconnected:
                text = 'Opponent disconnected! Returning to menu...';
                break;
            case EndGameView_1.EndGameState.Lost:
                text = 'You lost! Returning to menu...';
                break;
            case EndGameView_1.EndGameState.Won:
                text = 'You won! Returning to menu...';
                break;
            case EndGameView_1.EndGameState.Tied:
                text = 'You tied! Returning to menu...';
                break;
        }
        this.AddDiv(modal, text);
    }
}
exports.GameEndedModal = GameEndedModal;
//# sourceMappingURL=GameEndedModal.js.map