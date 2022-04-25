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
const network_events_1 = require("./public/network_events");
const wordle_logic_1 = require("./public/wordle_logic");
const words_1 = require("./public/words");
class WordleServer {
    constructor() {
        this._answer = ``;
    }
    HandleEvent(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const event = body;
            switch (body.type) {
                case 'new_game':
                    return this.NewGame();
                case `submit`:
                    const submit = body;
                    return this.Guess(submit.detail);
                default:
                    console.log(`unknown event: ${JSON.stringify(body)}`);
                    break;
            }
        });
    }
    NewGame() {
        this._answer = words_1.WORDS[Math.floor(Math.random() * words_1.WORDS.length)].toUpperCase();
        return Promise.resolve(new network_events_1.GameStartedMessage());
    }
    Guess(guess) {
        const knowledge = (0, wordle_logic_1.GetKnowledge)(guess, this._answer);
        return Promise.resolve(new network_events_1.KnowledgeUpdateMessage(knowledge));
    }
}
exports.WordleServer = WordleServer;
//# sourceMappingURL=wordle_server.js.map