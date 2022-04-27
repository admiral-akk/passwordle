"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpponentBoardManager = exports.PlayerBoardManager = exports.BoardManager = void 0;
const Events_1 = require("./Events");
const BoardView_1 = require("./views/BoardView");
class BoardManager {
    constructor() {
        this.boardView = new BoardView_1.BoardView(6, 5);
    }
}
exports.BoardManager = BoardManager;
class PlayerBoardManager extends BoardManager {
    constructor() {
        super();
        this.currentGuess = '';
        this.guessCount = 0;
        this.RegisterListeners();
    }
    AddChar(char) {
        if (this.currentGuess.length >= 5) {
            return;
        }
        this.currentGuess += char;
        this.boardView.UpdateGuess(this.currentGuess, this.guessCount);
    }
    Delete() {
        if (this.currentGuess.length <= 0) {
            return;
        }
        this.currentGuess += this.currentGuess.slice(0, -1);
        this.boardView.UpdateGuess(this.currentGuess, this.guessCount);
    }
    Submit() {
        if (this.currentGuess.length !== 5) {
            return;
        }
        document.dispatchEvent(new Events_1.SubmitGuessEvent(this.currentGuess));
        this.currentGuess = '';
        this.guessCount++;
    }
    UpdateGameState(state) {
        this.boardView.UpdateWords(state.playerMoves);
    }
    RegisterListeners() {
        document.addEventListener(Events_1.SubmitCommand.name, e => {
            this.Submit();
        });
        document.addEventListener(Events_1.AddCharCommand.name, e => {
            const event = e;
            this.AddChar(event.detail);
        });
        document.addEventListener(Events_1.DeleteCommand.name, e => {
            this.Delete();
        });
        document.addEventListener(Events_1.GameStateEvent.name, e => {
            const event = e;
            this.UpdateGameState(event.detail);
        });
    }
}
exports.PlayerBoardManager = PlayerBoardManager;
class OpponentBoardManager extends BoardManager {
    constructor() {
        super();
        this.RegisterListeners();
    }
    RegisterListeners() {
        document.addEventListener(Events_1.GameStateEvent.name, e => {
            const event = e;
            this.UpdateGameState(event.detail);
        });
    }
    UpdateGameState(state) {
        this.boardView.UpdateWords(state.opponentMoves);
    }
}
exports.OpponentBoardManager = OpponentBoardManager;
//# sourceMappingURL=BoardManager.js.map