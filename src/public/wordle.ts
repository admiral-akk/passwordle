import {WORDS} from './words';
import {LetterState, WordKnowledge} from './knowledge';
import {KnowledgeUpdateEvent} from './events';

export class Wordle {
  private _answer: string;
  constructor() {
    this._answer = '';
    document.addEventListener('submit', e => {
      this.Submit(e.detail);
    });
    document.addEventListener('new_game', () => {
      this.NewGame();
    });
  }

  private NewGame() {
    this._answer =
      WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase();
  }

  private Submit(guess: string) {
    const answer_state: LetterState[] = [];
    for (let i = 0; i < guess.length; i++) {
      answer_state[i] = LetterState.None;
      if (guess[i] === this._answer[i]) {
        answer_state[i] = LetterState.Green;
      }
      if (!this._answer.includes(guess[i])) {
        answer_state[i] = LetterState.Grey;
      }
    }
    for (let i = 0; i < guess.length; i++) {
      if (answer_state[i] !== LetterState.None) {
        continue;
      }
      let matched = 0;
      for (let j = 0; j < guess.length; j++) {
        if (i === j) {
          continue;
        }
        if (
          answer_state[j] !== LetterState.Green &&
          answer_state[j] !== LetterState.Yellow
        ) {
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
        answer_state[i] = LetterState.Yellow;
      } else {
        answer_state[i] = LetterState.Grey;
      }
    }

    console.log(`Answer: ${this._answer}`);

    const knowledge = new WordKnowledge(answer_state, guess);
    document.dispatchEvent(new KnowledgeUpdateEvent(knowledge));
  }
}
