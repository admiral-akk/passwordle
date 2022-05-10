export declare class NotificationState {
    private view;
    constructor(hasView: boolean);
    Reset(): void;
    Exit(): void;
    Won(): Promise<void>;
    Lost(): Promise<void>;
    Tied(): Promise<void>;
}
