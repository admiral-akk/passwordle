import { ModelState } from './ModelState';
import { NotificationView } from './view/NotificationView';
export declare class NotificationState extends ModelState<NotificationView> {
    constructor(hasView: boolean);
    Reset(): void;
    Won(): Promise<void>;
    Lost(): Promise<void>;
    Tied(): Promise<void>;
}
