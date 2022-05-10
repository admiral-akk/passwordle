"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerBoard = void 0;
const YourBoardState_1 = require("./YourBoardState");
const YourPasswordState_1 = require("./YourPasswordState");
const OpponentBoardState_1 = require("./OpponentBoardState");
const OpponentPasswordState_1 = require("./OpponentPasswordState");
class PlayerBoard {
    constructor(hasView = false) {
        this.hasView = hasView;
        this.yourBoard = new YourBoardState_1.YourBoardState(this.hasView);
        this.yourPassword = new YourPasswordState_1.YourPasswordState(this.hasView);
        this.opponentBoard = new OpponentBoardState_1.OpponentBoardState(this.hasView);
        this.opponentPassword = new OpponentPasswordState_1.OpponentPasswordState(this.hasView);
    }
    Reset() {
        this.yourBoard.Reset();
        this.yourPassword.Reset();
        this.opponentBoard.Reset();
        this.opponentPassword.Reset();
    }
    Exit() {
        this.yourBoard.Exit();
        this.yourPassword.Exit();
        this.opponentBoard.Exit();
        this.opponentPassword.Exit();
    }
    GameClientReady() { }
    OpponentDisconnected() { }
    AddedChar(update) {
        return this.yourBoard.AddChar(update.char);
    }
    Deleted() {
        return this.yourBoard.Delete();
    }
    LockedGuess() {
        return this.yourBoard.LockedGuess();
    }
    IsGameOver() {
        return this.yourPassword.Lost() || this.opponentPassword.Won();
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
    UpdatedAnswerKnowledge(update) {
        // Gather animations
        const animations = [];
        animations.push(...this.yourPassword.Update(update.playerProgress));
        animations.push(...this.yourBoard.Update(update.playerKnowledge));
        animations.push(...this.opponentBoard.Update(update.opponentKnowledge));
        animations.push(...this.opponentPassword.Update(update.opponentProgress));
        // Sequence them
        const sequence = {};
        animations.forEach(animation => {
            const index = animation.letterIndex;
            if (!(index in sequence)) {
                sequence[index] = [];
            }
            sequence[index].push(animation.animationStart);
        });
        // String them into a promise
        let promise = new Promise(resolve => resolve());
        for (let i = 0; i < 10; i++) {
            if (!(i in sequence)) {
                continue;
            }
            sequence[i].forEach(animationCallback => {
                promise = promise.then(() => {
                    animationCallback();
                    return Promise.resolve();
                });
            });
            promise = promise.then(() => new Promise(resolve => setTimeout(resolve, 400)));
        }
        return promise;
    }
    SetSecret(secret) {
        this.Reset();
        this.yourPassword.SetPassword(secret);
    }
}
exports.PlayerBoard = PlayerBoard;
//# sourceMappingURL=PlayerBoard.js.map