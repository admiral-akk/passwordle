// Opaque types: https://evertpot.com/opaque-ts-types/
declare const validLobbyId: unique symbol;

export type LobbyId = string & {
  [validLobbyId]: true;
};

// Just for the type system.
function assertValidLobbyId(input: string): asserts input is LobbyId {}

export function ToLobbyId(id: string): LobbyId {
  assertValidLobbyId(id);
  return id;
}

export function GenerateRandomLobbyId(): LobbyId {
  return ToLobbyId(Math.floor(Math.random() * 100000).toString());
}

export function FetchLobbyId(): LobbyId | null {
  const urlParams = new URLSearchParams(window.location.search);
  if ('lobbyId' in urlParams) {
    const lobbyId = urlParams.get('lobbyId')!;
    return ToLobbyId(lobbyId);
  } else {
    return null;
  }
}
