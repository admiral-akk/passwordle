import {GetKnowledge} from './game/logic/WordleLogic';
import {WORDS} from './public/words';
import {History} from './public/game_history';
import {WordKnowledge} from './game/logic/Knowledge';

export class Game {
  public history: History;
  public id: string;
  private answer: string;

  constructor(id: string) {
    this.id = id;
    this.answer = WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase();
    this.history = new History();
  }

  public Guess(guess: string): WordKnowledge {
    const knowledge = GetKnowledge(guess, this.answer);
    this.history.Add(guess, knowledge);
    return knowledge;
  }
}
