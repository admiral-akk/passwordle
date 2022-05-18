declare const validCommandId: unique symbol;
export declare type CommandId = number & {
    [validCommandId]: true;
};
export declare function ToCommandId(n: number): CommandId;
export {};
