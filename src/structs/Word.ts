// https://stackoverflow.com/questions/61295715/typedef-equivalent-for-typescript
// https://evertpot.com/opaque-ts-types/

declare const validWord: unique symbol;

export type Word = string & {
  [validWord]: true;
};

function assertValidWord(input: string): asserts input is Word {}

export function ToWord(s: string): Word {
  s = s.toUpperCase();
  assertValidWord(s);
  return s;
}
