"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameServer = void 0;
const words_1 = require("../public/words");
var GameState;
(function (GameState) {
    GameState[GameState["Start"] = 0] = "Start";
})(GameState || (GameState = {}));
class GameServer {
    constructor(players) {
        this.players = players;
        this.state = GameState.Start;
        this.answers = [];
        this.GenerateAnswers();
    }
    GenerateAnswers() {
        this.players.forEach(() => {
            this.answers.push(GenerateAnswer(this.answers));
        });
        for (let i = 0; i < this.players.length; i++) {
            this.players[i].emit('SecretWord', this.answers[i]);
        }
    }
}
exports.GameServer = GameServer;
function GenerateAnswer(existingAnswers) {
    let answer;
    do {
        answer = words_1.WORDS[Math.floor(Math.random() * words_1.WORDS.length)];
    } while (answer in existingAnswers);
    return answer;
}
//# sourceMappingURL=GameServer.js.map