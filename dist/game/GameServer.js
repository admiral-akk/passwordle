"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameServer = void 0;
const words_1 = require("../public/words");
const Hint_1 = require("./client/structs/Hint");
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
        this.guesses = [];
        this.RegisterPlayers(this.players);
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
            this.guesses.push('');
        });
        for (let i = 0; i < this.players.length; i++) {
            this.players[i].emit('SecretWord', this.answers[i]);
        }
    }
    RegisterPlayers(players) {
        players.forEach(player => {
            player.on('SubmitGuess', (guess) => {
                const playerIndex = player.data.playerIndex;
                this.guesses[playerIndex] = guess;
                if (this.guesses.filter(g => g.length === 0).length === 0) {
                    this.RevealHints();
                }
            });
        });
    }
    RevealHints() {
        this.players.forEach(player => {
            const playerIndex = player.data.playerIndex;
            const playerGuess = this.guesses[playerIndex];
            const opponentGuess = this.guesses[(playerIndex + 1) % 2];
            player.emit('Hints', new Hint_1.Hint(playerGuess, opponentGuess));
        });
        for (let i = 0; i < this.guesses.length; i++) {
            this.guesses[i] = '';
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