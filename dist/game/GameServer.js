"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameServer = void 0;
const words_1 = require("../public/words");
var GameState;
(function (GameState) {
    GameState[GameState["Start"] = 0] = "Start";
    GameState[GameState["SubmissionOpen"] = 1] = "SubmissionOpen";
})(GameState || (GameState = {}));
class GameServer {
    constructor(players) {
        this.players = players;
        this.state = GameState.Start;
        this.answers = [];
        this.SetState(GameState.Start);
    }
    SetState(newState) {
        this.state = newState;
        switch (newState) {
            case GameState.Start:
                this.GenerateAnswers();
                setTimeout(() => {
                    this.SetState(GameState.SubmissionOpen);
                }, 4000);
                break;
            case GameState.SubmissionOpen:
                this.OpenSubmission();
                break;
            default:
                break;
        }
    }
    OpenSubmission() {
        this.players.forEach(player => {
            player.emit('SubmissionOpen');
        });
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