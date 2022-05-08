"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameEndedModal = void 0;
const EndGameState_1 = require("../../../../game/EndGameState");
const Modal_1 = require("./Modal");
class GameEndedModal extends Modal_1.BaseModal {
    constructor(modal, endingType) {
        super();
        let text;
        switch (endingType) {
            case EndGameState_1.EndGameState.None:
                text = 'Opponent disconnected! Returning to menu...';
                break;
        }
        this.AddDiv(modal, text);
    }
}
exports.GameEndedModal = GameEndedModal;
//# sourceMappingURL=GameEndedModal.js.map