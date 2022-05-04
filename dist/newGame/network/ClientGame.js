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
        this.view = new GameView_1.GameView();
        this.board = new PlayerBoard_1.PlayerBoard(this.view);
        socket.on('OpponentAddedChar', () => this.OpponentAddedChar());
        socket.on('UpdatedAnswerKnowledge', (update) => this.UpdatedAnswerKnowledge(update));
        this.board.Ready();
        new InputManager_1.InputManager((char) => this.AddChar(char), () => { }, () => { });
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
        return res;
    }
}
exports.ClientGame = ClientGame;
//# sourceMappingURL=ClientGame.js.map