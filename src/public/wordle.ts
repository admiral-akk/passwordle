import {WORDS} from './words';
import {KnowledgeUpdateEvent} from './events';
import {GetKnowledge} from './wordle_logic';

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
    const knowledge = GetKnowledge(guess, this._answer);
    document.dispatchEvent(new KnowledgeUpdateEvent(knowledge));
  }
}
