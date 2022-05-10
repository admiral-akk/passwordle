import { Subview } from './Subview';
export declare class NotificationView extends Subview {
    Reset(): void;
    constructor();
    private SetText;
    Won(): Promise<void>;
    Lost(): Promise<void>;
    Tie(): Promise<void>;
}
