import { ServerSocket } from '../network/NetworkTypes';
declare const validPlayerId: unique symbol;
export declare type PlayerId = string & {
    [validPlayerId]: true;
};
export declare function ToPlayerId(socket: ServerSocket): PlayerId;
export {};
