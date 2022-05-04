"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerBoard = void 0;
const Words_1 = require("../../game/Words");
const Updates_1 = require("../network/updates/Updates");
class ServerBoard {
    constructor(players) {
        this.answers = {};
        const answersUsed = [];
        for (let i = 0; i < players.length; i++) {
            const answer = GenerateAnswer(answersUsed);
            this.answers[players[i]] = answer;
            answersUsed.push(answer);
        }
    }
    addedChar(player, update) { }
    generateKnowledge(player) {
        return new Updates_1.UpdatedAnswerKnowledge(this.answers[player]);
    }
}
exports.ServerBoard = ServerBoard;
function GenerateAnswer(answersUsed) {
    let answer;
    do {
        answer = (0, Words_1.GetRandomWord)();
    } while (answer in answersUsed);
    return (0, Words_1.GetRandomWord)();
}
//# sourceMappingURL=ServerBoard.js.map