"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const Updates_1 = require("../network/updates/Updates");
const OpponentBoardState_1 = require("./OpponentBoardState");
const OpponentPasswordState_1 = require("./OpponentPasswordState");
const YourBoardState_1 = require("./YourBoardState");
const YourPasswordState_1 = require("./YourPasswordState");
class Board {
    constructor(socket) {
        this.socket = socket;
        this.yourBoard = new YourBoardState_1.YourBoardState();
        this.yourPassword = new YourPasswordState_1.YourPasswordState();
        this.opponentBoard = new OpponentBoardState_1.OpponentBoardState();
        this.opponentPassword = new OpponentPasswordState_1.OpponentPasswordState();
    }
    Register(socket) {
        socket.on('OpponentAddedChar', () => this.OpponentAddedChar());
        socket.on('UpdatedAnswerKnowledge', (update) => this.UpdatedAnswerKnowledge(update));
        socket.on('SetSecret', (secret) => this.SetSecret(secret));
        socket.on('OpponentDeleted', () => this.OpponentDeleted());
        socket.on('OpponentLockedGuess', () => this.OpponentLockedGuess());
        socket.on('OpponentDisconnected', () => this.OpponentDisconnected());
    }
    Deregister(socket) {
        socket.removeAllListeners('OpponentAddedChar');
        socket.removeAllListeners('UpdatedAnswerKnowledge');
        socket.removeAllListeners('SetSecret');
        socket.removeAllListeners('OpponentDeleted');
        socket.removeAllListeners('OpponentLockedGuess');
        socket.removeAllListeners('OpponentDisconnected');
    }
    OpponentAddedChar() {
        this.opponentBoard.OpponentAddedChar();
    }
    OpponentDeleted() {
        this.opponentBoard.OpponentDeleted();
    }
    OpponentLockedGuess() {
        this.opponentBoard.OpponentLockedGuess();
    }
    UpdatedAnswerKnowledge(update) { }
    OpponentDisconnected() { }
    SetSecret(secret) {
        this.yourPassword.SetPassword(secret);
    }
    AddedChar(update) {
        const attempt = this.yourBoard.AttemptAddChar(update.char);
        if (attempt) {
            this.yourBoard.AddChar(update.char);
            this.socket.emit('AddedChar', update);
        }
    }
    Deleted() {
        const attempt = this.yourBoard.AttemptDelete();
        if (attempt) {
            this.yourBoard.Delete();
            this.socket.emit('Deleted');
        }
    }
    LockedGuess(update) {
        const attempt = this.yourBoard.AttemptLockedGuess();
        if (attempt) {
            const word = this.yourBoard.LockedGuess();
            this.socket.emit('LockedGuess', new Updates_1.LockedGuess(word));
        }
    }
}
exports.Board = Board;
//# sourceMappingURL=Board.js.map