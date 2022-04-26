import {
  GameStartedMessage,
  INetworkMessage,
  KnowledgeUpdateMessage,
  PollingMessage,
  SubmitWordMessage,
} from './public/network_events';
import {GetKnowledge} from './public/wordle_logic';
import {WORDS} from './public/words';

export class WordleServer {
  private _games: Record<string, string>;
  constructor() {
    this._games = {};
  }

  async HandleEvent(body: INetworkMessage): Promise<INetworkMessage> {
    switch (body.type) {
      case 'new_game':
        return this.NewGame();
      case 'submit': {
        const submit = body as SubmitWordMessage;
        return this.Guess(submit.detail, submit.id);
      }
      default:
        throw `Unknown event: ${JSON.stringify(body)}`;
    }
  }

  async HandlePoll(body: INetworkMessage): Promise<INetworkMessage> {
    const id = body.id as string;
    if (!(id in this._games)) {
      return Promise.resolve(new PollingMessage(''));
    }
    return Promise.resolve(new PollingMessage(id));
  }

  private NewGame(): Promise<INetworkMessage> {
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

  private Guess(guess: string, id: string): Promise<INetworkMessage> {
    const knowledge = GetKnowledge(guess, this._games[id]);
    return Promise.resolve(new KnowledgeUpdateMessage(knowledge, id));
  }
}
