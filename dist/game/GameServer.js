"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameServer = void 0;
const Words_1 = require("./Words");
const Hint_1 = require("./client/structs/Hint");
const WordleLogic_1 = require("./logic/WordleLogic");
const Word_1 = require("./structs/Word");
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
                }, 1000);
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
            this.answers.push((0, Word_1.ToWord)(GenerateAnswer(this.answers)));
            this.guesses.push((0, Word_1.ToWord)(''));
        });
        for (let i = 0; i < this.players.length; i++) {
            this.players[i].emit('SecretWord', this.answers[i]);
        }
    }
    RegisterPlayers(players) {
        players.forEach(player => {
            player.on('SubmitGuess', (guess) => {
                const playerIndex = player.data.playerIndex;
                this.guesses[playerIndex] = (0, Word_1.ToWord)(guess);
                if (this.guesses.filter(g => g.length === 0).length === 0) {
                    this.RevealHints();
                }
            });
        });
    }
    RevealHints() {
        this.players.forEach(player => {
            const playerIndex = player.data.playerIndex;
            const targetAnswer = this.answers[(playerIndex + 1) % 2];
            const playerKnowledge = (0, WordleLogic_1.GetKnowledge)(this.guesses[playerIndex], targetAnswer);
            const opponentKnowledge = (0, WordleLogic_1.GetKnowledge)(this.guesses[(playerIndex + 1) % 2], targetAnswer);
            player.emit('Hints', new Hint_1.Hint(playerKnowledge, opponentKnowledge));
        });
        for (let i = 0; i < this.guesses.length; i++) {
            this.guesses[i] = (0, Word_1.ToWord)('');
        }
    }
}
exports.GameServer = GameServer;
function GenerateAnswer(existingAnswers) {
    let answer;
    do {
        answer = Words_1.WORDS[Math.floor(Math.random() * Words_1.WORDS.length)];
    } while (answer in existingAnswers);
    return answer;
}
//# sourceMappingURL=GameServer.js.map