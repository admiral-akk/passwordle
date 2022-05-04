"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerGame = void 0;
const ServerBoard_1 = require("../model/ServerBoard");
const ClientGameMirror_1 = require("./ClientGameMirror");
class ServerGame {
    constructor(sockets) {
        this.opponent = {};
        this.playerClient = {};
        this.board = new ServerBoard_1.ServerBoard(sockets.map(s => s.data.playerId));
        for (let i = 0; i < sockets.length; i++) {
            const player = sockets[i].data.playerId;
            console.log(`player: ${player}`);
            this.opponent[player] = sockets[(i + 1) % 2].data.playerId;
            this.playerClient[player] = new ClientGameMirror_1.ClientGameMirror(sockets[i], (update) => this.addedChar(player, update));
            this.playerClient[player].UpdatedAnswerKnowledge(this.board.generateKnowledge(player));
        }
    }
    addedChar(player, update) {
        this.board.addedChar(player, update);
        this.playerClient[this.opponent[player]].OpponentAddedChar();
    }
}
exports.ServerGame = ServerGame;
//# sourceMappingURL=ServerGame.js.map