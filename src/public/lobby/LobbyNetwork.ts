import {ClientId} from '../struct/ClientId';

export const HOST_LOBBY_ENDPOINT_NAME = '/host';
export const FIND_MATCH_ENDPOINT_NAME = '/find_match';

export function HostLobby(callback: (data: ClientId) => void): void {
  Post(HOST_LOBBY_ENDPOINT_NAME, callback);
}

export function FindMatch(callback: (data: ClientId) => void): void {
  Post(FIND_MATCH_ENDPOINT_NAME, callback);
}

function Post(
  path: string,
  callback: (data: ClientId) => void,
  data: ClientId = new ClientId()
): void {
  window
    .fetch(path, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(clientId => {
      console.log(`Recieved response: ${JSON.stringify(clientId)}`)
      callback(clientId as ClientId)});
}
