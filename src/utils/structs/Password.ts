// https://stackoverflow.com/questions/61295715/typedef-equivalent-for-typescript
// https://evertpot.com/opaque-ts-types/

import {GetRandomWord} from '../../game/Words';

declare const validPassword: unique symbol;

export type Password = string & {
  [validPassword]: true;
};

function assertValidPassword(input: string): asserts input is Password {}

export function GeneratePassword(): Password {
  const password = GetRandomWord();
  assertValidPassword(password);
  return password;
}
