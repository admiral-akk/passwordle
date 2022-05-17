// https://stackoverflow.com/questions/61295715/typedef-equivalent-for-typescript
// https://evertpot.com/opaque-ts-types/

declare const validCommandId: unique symbol;

export type CommandId = number & {
  [validCommandId]: true;
};

function assertValidCommandId(input: number): asserts input is CommandId {}

export function ToCommandId(n: number): CommandId {
  assertValidCommandId(n);
  return n;
}
