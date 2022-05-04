"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerGame = void 0;
const ClientGameMirror_1 = require("./ClientGameMirror");
const Updates_1 = require("./updates/Updates");
const Words_1 = require("../../game/Words");
class ServerGame {
    constructor(sockets) {
        this.opponent = {};
        this.playerClient = {};
        const answers = GenerateAnswers(sockets.map(s => s.data.playerId));
        for (let i = 0; i < sockets.length; i++) {
            const player = sockets[i].data.playerId;
            console.log(`player: ${player}`);
            this.opponent[player] = sockets[(i + 1) % 2].data.playerId;
            this.playerClient[player] = new ClientGameMirror_1.ClientGameMirror(sockets[i]);
        }
        for (let i = 0; i < sockets.length; i++) {
            const player = sockets[i].data.playerId;
            const opponent = this.opponent[player];
            this.playerClient[player].RegisterOtherPlayer(this.playerClient[opponent]);
        }
        for (let i = 0; i < sockets.length; i++) {
            const player = sockets[i].data.playerId;
            const update = new Updates_1.UpdatedAnswerKnowledge(answers[player]);
            this.playerClient[player].UpdatedAnswerKnowledge(update);
        }
    }
}
exports.ServerGame = ServerGame;
function GenerateAnswers(playerIds) {
    const answersUsed = [];
    const answers = {};
    for (let i = 0; i < playerIds.length; i++) {
        const answer = GenerateAnswer(answersUsed);
        answers[playerIds[i]] = answer;
        answersUsed.push(answer);
    }
    return answers;
}
function GenerateAnswer(answersUsed) {
    let answer;
    do {
        answer = (0, Words_1.GetRandomWord)();
    } while (answer in answersUsed);
    return (0, Words_1.GetRandomWord)();
}
//# sourceMappingURL=ServerGame.js.map