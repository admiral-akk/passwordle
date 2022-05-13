// https://stackoverflow.com/questions/61295715/typedef-equivalent-for-typescript
// https://evertpot.com/opaque-ts-types/

import {ServerSocket} from '../network/NetworkTypes';

declare const validPlayerId: unique symbol;

export type PlayerId = string & {
  [validPlayerId]: true;
};

function assertValidPlayerId(input: string): asserts input is PlayerId {}

export function ToPlayerId(socket: ServerSocket): PlayerId {
  assertValidPlayerId(socket.id);
  return socket.id;
}
