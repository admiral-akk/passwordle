"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameServer = void 0;
const Words_1 = require("./Words");
const Hint_1 = require("./client/structs/Hint");
const WordleLogic_1 = require("./logic/WordleLogic");
const Word_1 = require("./structs/Word");
const TargetProgress_1 = require("./client/structs/TargetProgress");
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
        this.progress = [];
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
            this.progress.push(new TargetProgress_1.TargetProgress(['', '', '', '', '']));
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
                    this.UpdateProgress();
                    this.RevealHints();
                    this.CheckWin();
                    this.ClearWords();
                }
            });
        });
    }
    UpdateProgress() {
        for (let i = 0; i < this.progress.length; i++) {
            const answer = this.answers[i];
            const knowledge = (0, WordleLogic_1.GetKnowledge)(this.guesses[i], answer);
            const extraKnowledge = (0, WordleLogic_1.GetKnowledge)(this.guesses[(i + 1) % 2], answer);
            this.progress[i].UpdateProgress(knowledge);
            this.progress[i].UpdateProgress(extraKnowledge);
        }
    }
    RevealHints() {
        this.players.forEach(player => {
            const playerIndex = player.data.playerIndex;
            const targetAnswer = this.answers[(playerIndex + 1) % 2];
            const playerKnowledge = (0, WordleLogic_1.GetKnowledge)(this.guesses[playerIndex], targetAnswer);
            const opponentKnowledge = (0, WordleLogic_1.GetKnowledge)(this.guesses[(playerIndex + 1) % 2], targetAnswer);
            player.emit('Hints', new Hint_1.Hint(playerKnowledge, opponentKnowledge, this.progress[playerIndex], this.progress[(playerIndex + 1) % 2]));
        });
    }
    CheckWin() {
        for (let i = 0; i < this.players.length; i++) {
            const guess = this.guesses[i];
            const targetAnswer = this.answers[(i + 1) % 2];
            if (guess === targetAnswer) {
                this.players[i].emit('Won');
                this.players[(i + 1) % 2].emit('Lost');
                break;
            }
        }
    }
    ClearWords() {
        for (let i = 0; i < this.guesses.length; i++) {
            this.guesses[i] = (0, Word_1.ToWord)('');
        }
    }
}
exports.GameServer = GameServer;
function GenerateAnswer(existingAnswers) {
    let answer;
    do {
        answer = (0, Words_1.GetRandomWord)();
    } while (answer in existingAnswers);
    return answer;
}
//# sourceMappingURL=GameServer.js.map