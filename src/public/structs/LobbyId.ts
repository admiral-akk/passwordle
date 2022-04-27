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
