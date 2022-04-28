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
  private clientId: string;
  private GetId(): string | null {
    return null;
  }

  constructor() {
    this.clientId = '';
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
          this.clientId = data.id;
          const gameStarted = new GameStartedEvent();
          document.dispatchEvent(gameStarted);
        });
    });
    document.dispatchEvent(new NewGameEvent());
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
