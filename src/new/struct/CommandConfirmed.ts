// https://stackoverflow.com/questions/61295715/typedef-equivalent-for-typescript
// https://evertpot.com/opaque-ts-types/

declare const validCommandConfirmed: unique symbol;

export type CommandConfirmed = boolean & {
  [validCommandConfirmed]: true;
};

function assertValidCommandConfirmed(
  input: boolean
): asserts input is CommandConfirmed {}

export function ValidCommandConfirmed(): CommandConfirmed {
  const confirmed = true;
  assertValidCommandConfirmed(confirmed);
  return confirmed;
}
