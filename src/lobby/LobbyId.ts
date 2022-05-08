// https://stackoverflow.com/questions/61295715/typedef-equivalent-for-typescript
// https://evertpot.com/opaque-ts-types/

import {LobbyServerSocket} from './server/LobbyNetworkTypes';

declare const validLobbyId: unique symbol;

export type LobbyId = string & {
  [validLobbyId]: true;
};

const LOBBY_ID_QUERY_NAME = 'lobbyId';

function assertValidLobbyId(input: string): asserts input is LobbyId {}

export function FindLobbyIdInURL(): LobbyId | null {
  const lobbyId = new URLSearchParams(window.location.search).get(
    LOBBY_ID_QUERY_NAME
  );
  if (!lobbyId) {
    return null;
  }
  assertValidLobbyId(lobbyId!);
  return lobbyId!;
}

export function GenerateLobbyLink(lobbyId: LobbyId): string {
  const url = new URLSearchParams(window.location.search);
  url.append(LOBBY_ID_QUERY_NAME, lobbyId);
  return `${window.location.href}?${url.toString()}`;
}

export function GenerateLobbyId(socket: LobbyServerSocket): LobbyId {
  const lobbyId = socket.data.playerId!;
  assertValidLobbyId(lobbyId);
  return lobbyId;
}
