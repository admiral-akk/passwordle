import { Subview } from './view/Subview';
export declare abstract class ModelState<ViewType extends Subview> {
    protected view?: ViewType | undefined;
    constructor(view?: ViewType | undefined);
    Reset(): void;
    Exit(): void;
}
