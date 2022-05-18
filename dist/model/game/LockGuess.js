"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LockGuess = void 0;
const PlayerModel_1 = require("../PlayerModel");
const GameCommand_1 = require("./GameCommand");
class LockGuess extends GameCommand_1.GameCommand {
    execute() {
        const game = this.gameModel;
        game.yourGuesses.push(new PlayerModel_1.AnnotatedWord(game.currentGuess));
        game.currentGuess = '';
        game.state = PlayerModel_1.GameState.Waiting;
    }
    undo() {
        const game = this.gameModel;
        game.currentGuess = game.yourGuesses.pop().word;
        game.state = PlayerModel_1.GameState.CanSubmit;
    }
}
exports.LockGuess = LockGuess;
//# sourceMappingURL=LockGuess.js.map