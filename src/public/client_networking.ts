// Handles events to/from the server.

import {response} from 'express';
import {resolve} from 'path';
import {GameStartedEvent, KnowledgeUpdateEvent, NewGameEvent} from './events';
import {
  GameStartedMessage,
  NewGameMessage,
  SubmitWordMessage,
  KnowledgeUpdateMessage,
} from './network_events';

export class ClientNetworking {
  constructor() {
    document.addEventListener('submit', e => {
      Post('/event', new SubmitWordMessage(e.detail))
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
      Post('/event', new NewGameMessage())
        .then(response => {
          console.log('Converting response to JSON');
          return response.json();
        })
        .then(() => {
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
