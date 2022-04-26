// Handles events to/from the server.

import {GameStartedEvent, KnowledgeUpdateEvent, NewGameEvent} from './events';
import {
  NewGameMessage,
  SubmitWordMessage,
  KnowledgeUpdateMessage,
} from './network_events';

export class ClientNetworking {
  private id: string;

  private GetId(): string {
    return this.id;
  }
  constructor() {
    this.id = '';
    document.addEventListener('submit', e => {
      Post('/event', new SubmitWordMessage(e.detail, this.GetId()))
        .then(response => {
          console.log('Converting response to JSON');
          return response.json();
        })
        .then(data => {
          const message = data as KnowledgeUpdateMessage;
          const knowledgeUpdate = new KnowledgeUpdateEvent(message.detail);
          document.dispatchEvent(knowledgeUpdate);
        });
    });
    document.addEventListener('new_game', e => {
      console.log('sending new game message');
      Post('/event', new NewGameMessage())
        .then(response => response.json())
        .then(data => {
          this.id = data.id;
          const gameStarted = new GameStartedEvent();
          document.dispatchEvent(gameStarted);
        });
    });
    document.dispatchEvent(new NewGameEvent());
  }
}

function Post(path: string, data: any) {
  return window.fetch(path, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

function Get(path: string, data: any) {
  return window.fetch(path, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
}
