"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerGame = void 0;
const ClientGameMirror_1 = require("./ClientGameMirror");
const Words_1 = require("../../game/Words");
const KnowledgeUpdateServer_1 = require("./KnowledgeUpdateServer");
class ServerGame {
    constructor(sockets, GameEnded) {
        this.GameEnded = GameEnded;
        this.playerClient = {};
        const players = sockets.map(s => s.data.playerId);
        const secrets = GenerateSecrets(sockets.map(s => s.data.playerId));
        for (let i = 0; i < sockets.length; i++) {
            const player = sockets[i].data.playerId;
            console.log(`player: ${player}`);
            this.playerClient[player] = new ClientGameMirror_1.ClientGameMirror(sockets[i]);
        }
        this.exchangeServer = new KnowledgeUpdateServer_1.KnowledgeExchangeServer(players, secrets, (playerId, update) => {
            this.playerClient[playerId].UpdatedAnswerKnowledge(update);
        }, () => this.GameEnded());
        for (let i = 0; i < sockets.length; i++) {
            const player = sockets[i].data.playerId;
            const opponent = sockets[(i + 1) % 2].data.playerId;
            this.playerClient[player].RegisterOtherPlayer(this.playerClient[opponent]);
            this.playerClient[player].RegisterLockedGuess((update) => {
                this.exchangeServer.RegisterGuess(player, update.guess);
            });
            const secret = secrets[player];
            this.playerClient[player].SetSecret(secret);
        }
    }
}
exports.ServerGame = ServerGame;
function GenerateSecrets(playerIds) {
    const answersUsed = [];
    const answers = {};
    for (let i = 0; i < playerIds.length; i++) {
        const answer = GenerateSecret(answersUsed);
        answers[playerIds[i]] = answer;
        answersUsed.push(answer);
    }
    return answers;
}
function GenerateSecret(answersUsed) {
    let answer;
    do {
        answer = (0, Words_1.GetRandomWord)();
    } while (answer in answersUsed);
    return (0, Words_1.GetRandomWord)();
}
//# sourceMappingURL=ServerGame.js.map