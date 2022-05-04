declare const validPlayerId: unique symbol;
export declare type PlayerId = string & {
    [validPlayerId]: true;
};
export declare function ToPlayerId(s: string): PlayerId;
export {};
