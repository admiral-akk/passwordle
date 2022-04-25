"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wordle = void 0;
const words_1 = require("./words");
const knowledge_1 = require("./knowledge");
const events_1 = require("./events");
class Wordle {
    constructor() {
        this._answer = '';
        document.addEventListener('submit', e => {
            this.Submit(e.detail);
        });
        document.addEventListener('new_game', () => {
            this.NewGame();
        });
    }
    NewGame() {
        this._answer =
            words_1.WORDS[Math.floor(Math.random() * words_1.WORDS.length)].toUpperCase();
    }
    Submit(guess) {
        const answer_state = [];
        for (let i = 0; i < guess.length; i++) {
            answer_state[i] = knowledge_1.LetterState.None;
            if (guess[i] === this._answer[i]) {
                answer_state[i] = knowledge_1.LetterState.Green;
            }
            if (!this._answer.includes(guess[i])) {
                answer_state[i] = knowledge_1.LetterState.Grey;
            }
        }
        for (let i = 0; i < guess.length; i++) {
            if (answer_state[i] !== knowledge_1.LetterState.None) {
                continue;
            }
            let matched = 0;
            for (let j = 0; j < guess.length; j++) {
                if (i === j) {
                    continue;
                }
                if (answer_state[j] !== knowledge_1.LetterState.Green &&
                    answer_state[j] !== knowledge_1.LetterState.Yellow) {
                    continue;
                }
                if (guess[j] !== guess[i]) {
                    continue;
                }
                matched++;
            }
            const charCount = (this._answer.match(new RegExp(guess[i], 'g')) || [])
                .length;
            if (charCount > matched) {
                answer_state[i] = knowledge_1.LetterState.Yellow;
            }
            else {
                answer_state[i] = knowledge_1.LetterState.Grey;
            }
        }
        console.log(`Answer: ${this._answer}`);
        const knowledge = new knowledge_1.WordKnowledge(answer_state, guess);
        document.dispatchEvent(new events_1.KnowledgeUpdateEvent(knowledge));
    }
}
exports.Wordle = Wordle;
//# sourceMappingURL=wordle.js.map