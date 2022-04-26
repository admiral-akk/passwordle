import {
  GameStartedMessage,
  KnowledgeUpdateMessage,
} from './public/network_events';
import {GetKnowledge} from './public/wordle_logic';
import {WORDS} from './public/words';

export class WordleServer {
  private _games: Record<string, string>;
  constructor() {
    this._games = {};
  }

  async HandleEvent(body: any): Promise<any> {
    switch (body.type) {
      case 'new_game':
        return this.NewGame();
      case 'submit':
        return this.Guess(body.detail, body.id);
      default:
        console.log(`unknown event: ${JSON.stringify(body)}`);
        break;
    }
  }

  private NewGame(): Promise<any> {
    let id = '1';
    while (id in this._games) {
      console.log(`id taken: ${id}, answer: ${this._games[id]}`);
      id = Math.floor(Math.random() * 10000).toString();
    }
    const answer =
      WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase();
    this._games[id] = answer;
    console.log(`id is: ${id}`);
    return Promise.resolve(new GameStartedMessage(id));
  }

  private Guess(guess: string, id: string): Promise<any> {
    const knowledge = GetKnowledge(guess, this._games[id]);
    return Promise.resolve(new KnowledgeUpdateMessage(knowledge, id));
  }
}
