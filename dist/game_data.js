"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const WordleLogic_1 = require("./game/logic/WordleLogic");
const words_1 = require("./public/words");
const game_history_1 = require("./public/game_history");
class Game {
    constructor(id) {
        this.id = id;
        this.answer = words_1.WORDS[Math.floor(Math.random() * words_1.WORDS.length)].toUpperCase();
        this.history = new game_history_1.History();
    }
    Guess(guess) {
        const knowledge = (0, WordleLogic_1.GetKnowledge)(guess, this.answer);
        this.history.Add(guess, knowledge);
        return knowledge;
    }
}
exports.Game = Game;
//# sourceMappingURL=game_data.js.map