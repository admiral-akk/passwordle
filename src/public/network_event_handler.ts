// Handles events to/from the server.

export class NetworkEventHandler {
  constructor() {
    document.addEventListener('submit', e => {
      Post('/event', {type: e.type, detail: e.detail, event: e});
    });
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
