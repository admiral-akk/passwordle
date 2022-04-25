"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wordle = void 0;
const words_1 = require("./words");
const events_1 = require("./events");
const wordle_logic_1 = require("./wordle_logic");
class Wordle {
    constructor() {
        this._answer = '';
        document.addEventListener('submit', e => {
            this.Submit(e.detail);
        });
        document.addEventListener('new_game', () => {
            this.NewGame();
        });
    }
    NewGame() {
        this._answer =
            words_1.WORDS[Math.floor(Math.random() * words_1.WORDS.length)].toUpperCase();
    }
    Submit(guess) {
        const knowledge = (0, wordle_logic_1.GetKnowledge)(guess, this._answer);
        document.dispatchEvent(new events_1.KnowledgeUpdateEvent(knowledge));
    }
}
exports.Wordle = Wordle;
//# sourceMappingURL=wordle.js.map