"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnowledgeExchangeServer = void 0;
const TargetProgress_1 = require("../client/structs/TargetProgress");
const WordleLogic_1 = require("../logic/WordleLogic");
const Updates_1 = require("./updates/Updates");
class KnowledgeExchangeServer {
    constructor(players, answers, updateKnowledgeCallback, GameEnded) {
        this.players = players;
        this.answers = answers;
        this.updateKnowledgeCallback = updateKnowledgeCallback;
        this.GameEnded = GameEnded;
        this.progress = {};
        this.opponent = {};
        this.currentGuess = {};
        for (let i = 0; i < players.length; i++) {
            const player = players[i];
            this.opponent[player] = players[(i + 1) % 2];
            this.progress[player] = new TargetProgress_1.TargetProgress();
        }
    }
    SendUpdatedKnowledge() {
        this.UpdateProgress();
        this.players.forEach(player => this.SendKnowledge(player));
        this.ClearGuesses();
        this.CheckEndGame();
    }
    GenerateEndgame() {
        const endGame = {};
        for (let i = 0; i < this.players.length; i++) {
            const player = this.players[i];
            const finished = (0, TargetProgress_1.Complete)(this.progress[player]);
        }
        return endGame;
    }
    CheckEndGame() {
        this.players.forEach(player => {
            if ((0, TargetProgress_1.Complete)(this.progress[player])) {
                const endgame = this.GenerateEndgame();
                this.GameEnded(endgame);
                return;
            }
        });
    }
    UpdateProgress() {
        this.players.forEach(player => {
            const opponent = this.opponent[player];
            const targetAnswer = this.answers[opponent];
            const playerGuess = this.currentGuess[player];
            const opponentGuess = this.currentGuess[opponent];
            UpdateTargetProgress(this.progress[player], playerGuess, targetAnswer);
            UpdateTargetProgress(this.progress[player], opponentGuess, targetAnswer);
        });
    }
    SendKnowledge(player) {
        const opponent = this.opponent[player];
        const targetAnswer = this.answers[opponent];
        const playerGuess = this.currentGuess[player];
        const opponentGuess = this.currentGuess[opponent];
        const playerKnowledge = (0, WordleLogic_1.GetKnowledge)(playerGuess, targetAnswer);
        const opponentKnowledge = (0, WordleLogic_1.GetKnowledge)(opponentGuess, targetAnswer);
        const update = new Updates_1.UpdatedAnswerKnowledge(playerKnowledge, opponentKnowledge, this.progress[opponent], this.progress[player]);
        this.updateKnowledgeCallback(player, update);
    }
    ClearGuesses() {
        this.players.forEach(player => {
            delete this.currentGuess[player];
        });
    }
    RegisterGuess(player, guess) {
        this.currentGuess[player] = guess;
        if (Object.keys(this.currentGuess).length < 2) {
            return;
        }
        this.SendUpdatedKnowledge();
    }
}
exports.KnowledgeExchangeServer = KnowledgeExchangeServer;
function UpdateTargetProgress(progress, guess, answer) {
    progress.UpdateProgress((0, WordleLogic_1.GetKnowledge)(guess, answer));
}
//# sourceMappingURL=KnowledgeUpdateServer.js.map