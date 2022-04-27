"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordleServer = void 0;
const game_data_1 = require("./game_data");
const network_events_1 = require("./public/network_events");
class WordleServer {
    constructor() {
        this._games = {};
        this._awaitingMatch = [];
    }
    HandleEvent(body) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (body.type) {
                case 'new_game':
                    return this.NewGame();
                case 'submit': {
                    const submit = body;
                    return this.Guess(submit.detail, submit.id);
                }
                default:
                    return Promise.reject(`Unknown event: ${JSON.stringify(body)}`);
            }
        });
    }
    HandlePoll(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = body.id;
            if (!(id in this._games)) {
                return Promise.reject(`Game id ${id} doesn't exist!`);
            }
            return Promise.resolve(new network_events_1.GameStateMessage(id, this._games[id].history));
        });
    }
    NewGame() {
        if (this._awaitingMatch.length > 0) {
            const id = this._awaitingMatch.pop();
            return Promise.resolve(new network_events_1.GameStartedMessage(id));
        }
        let id = '1';
        while (id in this._games) {
            console.log(`id taken: ${id}, answer: ${this._games[id]}`);
            id = Math.floor(Math.random() * 10000).toString();
        }
        this._games[id] = new game_data_1.Game(id);
        this._awaitingMatch.push(id);
        return Promise.resolve(new network_events_1.GameStartedMessage(id));
    }
    Guess(guess, id) {
        const knowledge = this._games[id].Guess(guess);
        return Promise.resolve(new network_events_1.KnowledgeUpdateMessage(knowledge, id));
    }
}
exports.WordleServer = WordleServer;
//# sourceMappingURL=wordle_server.js.map