import {Game} from './game_data';
import {
  GameStartedMessage,
  GameStateMessage,
  INetworkMessage,
  KnowledgeUpdateMessage,
  SubmitWordMessage,
} from './public/network_events';

export class WordleServer {
  private _games: Record<string, Game>;
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
        return Promise.reject(`Unknown event: ${JSON.stringify(body)}`);
    }
  }

  async HandlePoll(body: INetworkMessage): Promise<GameStateMessage> {
    const id = body.id as string;
    if (!(id in this._games)) {
      return Promise.reject(`Game id ${id} doesn't exist!`);
    }
    return Promise.resolve(new GameStateMessage(id, this._games[id].history));
  }

  private NewGame(): Promise<GameStartedMessage> {
    let id = '1';
    while (id in this._games) {
      console.log(`id taken: ${id}, answer: ${this._games[id]}`);
      id = Math.floor(Math.random() * 10000).toString();
    }
    this._games[id] = new Game(id);
    console.log(`id is: ${id}`);
    return Promise.resolve(new GameStartedMessage(id));
  }

  private Guess(guess: string, id: string): Promise<KnowledgeUpdateMessage> {
    const knowledge = this._games[id].Guess(guess);
    return Promise.resolve(new KnowledgeUpdateMessage(knowledge, id));
  }
}
