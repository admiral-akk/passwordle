"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientGame = void 0;
const InputManager_1 = require("../../game/client/input/InputManager");
const GameView_1 = require("../../game/client/view/GameView");
const PlayerBoard_1 = require("../model/PlayerBoard");
const Updates_1 = require("./updates/Updates");
class ClientGame {
    constructor(socket) {
        this.socket = socket;
        this.board = new PlayerBoard_1.PlayerBoard(new GameView_1.GameView());
        socket.on('OpponentAddedChar', () => this.OpponentAddedChar());
        socket.on('UpdatedAnswerKnowledge', (update) => this.UpdatedAnswerKnowledge(update));
        new InputManager_1.InputManager((char) => this.AddChar(char), () => { }, () => { });
    }
    OpponentDeleted() {
        this.board.OpponentDeleted();
    }
    OpponentAddedChar() {
        this.board.OpponentAddedChar();
    }
    UpdatedAnswerKnowledge(update) {
        this.board.UpdatedAnswerKnowledge(update);
    }
    AddChar(char) {
        const res = this.board.AddChar(char);
        // success: tell the server/view about it
        if (typeof res === Updates_1.AddedChar.name) {
            this.socket.emit('AddedChar', res);
        }
    }
}
exports.ClientGame = ClientGame;
//# sourceMappingURL=ClientGame.js.map