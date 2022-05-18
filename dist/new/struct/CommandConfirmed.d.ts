declare const validCommandConfirmed: unique symbol;
export declare type CommandConfirmed = boolean & {
    [validCommandConfirmed]: true;
};
export declare function ValidCommandConfirmed(): CommandConfirmed;
export {};
