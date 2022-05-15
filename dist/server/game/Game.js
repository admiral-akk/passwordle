"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const GameState_1 = require("../../game/model/GameState");
const Words_1 = require("../../game/Words");
// Takes in action, outputs updates
class Game {
    constructor(players) {
        this.players = players;
        this.gameStates = {};
        this.updaters = {};
        this.AddChar = (update, playerId) => {
            const opponentId = this.GetOpponent(playerId);
            this.updaters[playerId].AddedChar(update);
            this.updaters[opponentId].OpponentAddedChar();
        };
        this.Delete = (playerId) => {
            const opponentId = this.GetOpponent(playerId);
            this.updaters[playerId].Deleted();
            this.updaters[opponentId].OpponentDeleted();
        };
        this.LockGuess = (playerId) => {
            const opponentId = this.GetOpponent(playerId);
            this.updaters[playerId].LockedGuess();
            this.updaters[opponentId].OpponentLockedGuess();
            if (this.gameStates[playerId].GuessSubmitted() &&
                this.gameStates[opponentId].GuessSubmitted()) {
                this.UpdateKnowledge();
            }
        };
        this.GameClientReady = (playerId) => {
            this.updaters[playerId].SetSecret((0, Words_1.GetRandomAnswer)());
        };
        players.forEach(player => (this.gameStates[player] = new GameState_1.GameState()));
    }
    RegisterUpdater(player, updater) {
        this.updaters[player] = updater;
    }
    GetOpponent(player) {
        if (this.players[0] === player) {
            return this.players[1];
        }
        else {
            return this.players[0];
        }
    }
    UpdateKnowledge() {
        const updates = {};
        this.players.forEach(player => {
            // Update answer knowledge
            const opponent = this.GetOpponent(player);
            const opponentGuess = this.gameStates[opponent].GetCurrentGuess();
            const opponentPassword = this.gameStates[opponent].GetPassword();
            updates[player] = this.gameStates[player].GenerateKnowledgeUpdate(opponentGuess, opponentPassword);
        });
        this.players.forEach(player => {
            this.updaters[player].UpdatedAnswerKnowledge(updates[player]);
        });
    }
}
exports.Game = Game;
//# sourceMappingURL=Game.js.map