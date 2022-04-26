// Handles events to/from the server.
import {GameStartedEvent, KnowledgeUpdateEvent, NewGameEvent} from './events';
import {
  NewGameMessage,
  SubmitWordMessage,
  KnowledgeUpdateMessage,
  INetworkMessage,
} from './network_events';

function Post(path: string, data: INetworkMessage) {
  return window.fetch(path, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

function Get(path: string, gameId: string) {
  return window.fetch(`${path}/:${gameId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
}

export class ClientNetworking {
  private id: string;

  private GetId(): string {
    return this.id;
  }
  constructor() {
    this.id = '';
    document.addEventListener('submit', e => {
      Post('/event', new SubmitWordMessage(e.detail, this.GetId()))
        .then(response => response.json())
        .then(data => {
          const message = data as KnowledgeUpdateMessage;
          const knowledgeUpdate = new KnowledgeUpdateEvent(message.detail);
          document.dispatchEvent(knowledgeUpdate);
        });
    });
    document.addEventListener('new_game', () => {
      Post('/event', new NewGameMessage())
        .then(response => response.json())
        .then(data => {
          this.id = data.id;
          const gameStarted = new GameStartedEvent();
          document.dispatchEvent(gameStarted);
        });
    });
    document.dispatchEvent(new NewGameEvent());
    setInterval(() => {
      if (this.GetId() === undefined) {
        return;
      }
      Get('/poll', this.GetId())
        .then(response => response.json())
        .then(data =>
          console.log(`Recieved polling response: ${JSON.stringify(data)}`)
        );
    }, 1000);
  }
}
