// Handles events to/from the server.
import {
  GameHistoryEvent,
  GameStartedEvent,
  KnowledgeUpdateEvent,
  NewGameEvent,
} from './events';
import {
  NewGameMessage,
  SubmitWordMessage,
  KnowledgeUpdateMessage,
  INetworkMessage,
  GameStateMessage,
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
  return window.fetch(`${path}/${gameId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
}

export class ClientNetworking {
  private urlParams: URLSearchParams;

  private GetId(): string | null {
    return this.urlParams.get('id');
  }

  constructor() {
    this.urlParams = new URLSearchParams(window.location.search);
    document.addEventListener('submit', e => {
      const id = this.GetId();
      if (id === null) {
        return;
      }
      Post('/event', new SubmitWordMessage(e.detail, id))
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
          const searchParams = new URLSearchParams(window.location.search);
          searchParams.set('id', data.id);
          window.location.search = searchParams.toString();
          const gameStarted = new GameStartedEvent();
          document.dispatchEvent(gameStarted);
        });
    });
    if (this.urlParams.get('id') === null) {
      document.dispatchEvent(new NewGameEvent());
    }
    setInterval(() => {
      const id = this.GetId();
      if (id === null) {
        return;
      }
      Get('/poll', id)
        .then(response => response.json())
        .then(data => {
          const message = data as GameStateMessage;
          document.dispatchEvent(new GameHistoryEvent(message.detail));
          console.log(`Recieved polling response: ${JSON.stringify(data)}`);
        });
    }, 1000);
  }
}
