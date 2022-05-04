"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerGameState = void 0;
const Words_1 = require("../../game/Words");
const ClientGameState_1 = require("./ClientGameState");
const PlayerBoard_1 = require("./PlayerBoard");
class ServerGameState {
    constructor(players) {
        this.boards = {};
        this.answers = {};
        this.clients = {};
        this.opponent = {};
        players.forEach(player => {
            this.boards[player] = new PlayerBoard_1.PlayerBoard();
            this.answers[player] = GenerateAnswer(Object.keys(this.answers).map(k => this.answers[k]));
        });
        for (let i = 0; i < players.length; i++) {
            const player = players[i];
            const opponent = players[(i + 1) % 2];
            this.opponent[player] = opponent;
            this.clients[player] = new ClientGameState_1.ClientGameState(player, this.boards[player], this.boards[opponent], (update) => this.addChar(player, update), (update) => this.delete(player, update), (update) => this.submit(player, update));
        }
    }
    addChar(player, update) {
        this.boards[player].AddChar(update.char);
    }
    submit(player, update) {
        this.boards[player].Submit();
    }
    delete(player, update) {
        this.boards[player].Delete();
    }
}
exports.ServerGameState = ServerGameState;
function GenerateAnswer(answers) {
    let answer;
    do {
        answer = (0, Words_1.GetRandomWord)();
    } while (answer in answers);
    return answer;
}
//# sourceMappingURL=ServerGameState.js.map