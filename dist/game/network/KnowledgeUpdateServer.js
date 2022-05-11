"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnowledgeExchangeServer = void 0;
const TargetProgress_1 = require("../client/structs/TargetProgress");
const WordleLogic_1 = require("../logic/WordleLogic");
const Updates_1 = require("./updates/Updates");
const EndGameState_1 = require("../../util/struct/EndGameState");
class KnowledgeExchangeServer {
    constructor(players, answers, updateKnowledgeCallback, GameEnded) {
        this.players = players;
        this.answers = answers;
        this.updateKnowledgeCallback = updateKnowledgeCallback;
        this.GameEnded = GameEnded;
        this.progress = {};
        this.opponent = {};
        this.currentGuess = {};
        this.guessCount = 0;
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
    CheckEndGame() {
        this.players.forEach(player => {
            if ((0, TargetProgress_1.Complete)(this.progress[player])) {
                this.GameEnded();
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
    IsEndGame() {
        if (this.players.filter(player => (0, TargetProgress_1.Complete)(this.progress[player])).length > 0) {
            return true;
        }
        if (this.guessCount === 6) {
            return true;
        }
        return false;
    }
    GenerateSummary(player) {
        if (!this.IsEndGame()) {
            return null;
        }
        const opponent = this.opponent[player];
        return new EndGameState_1.EndGameSummary(this.answers[player], this.answers[opponent], this.progress[player], this.progress[opponent]);
    }
    SendKnowledge(player) {
        const opponent = this.opponent[player];
        const targetAnswer = this.answers[opponent];
        const playerGuess = this.currentGuess[player];
        const opponentGuess = this.currentGuess[opponent];
        const playerKnowledge = (0, WordleLogic_1.GetKnowledge)(playerGuess, targetAnswer);
        const opponentKnowledge = (0, WordleLogic_1.GetKnowledge)(opponentGuess, targetAnswer);
        const endgame = this.GenerateSummary(player);
        const update = new Updates_1.UpdatedAnswerKnowledge(playerKnowledge, opponentKnowledge, this.progress[opponent], this.progress[player], endgame);
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
        this.guessCount++;
        this.SendUpdatedKnowledge();
    }
}
exports.KnowledgeExchangeServer = KnowledgeExchangeServer;
function UpdateTargetProgress(progress, guess, answer) {
    (0, TargetProgress_1.UpdateProgress)(progress, (0, WordleLogic_1.GetKnowledge)(guess, answer));
}
//# sourceMappingURL=KnowledgeUpdateServer.js.map