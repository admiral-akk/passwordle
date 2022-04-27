// Opaque types: https://evertpot.com/opaque-ts-types/
declare const validPlayerId: unique symbol;

export type PlayerId = string & {
  [validPlayerId]: true;
};

// Just for the type system.
function assertValidPlayerId(input: string): asserts input is PlayerId {}

export function ToPlayerId(id: string): PlayerId {
  assertValidPlayerId(id);
  return id;
}
