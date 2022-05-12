import { Subview } from './view/Subview';
export declare abstract class ModelState<ViewType extends Subview> {
    private readonly makeView;
    protected view: ViewType | null;
    constructor(makeView: {
        new (): ViewType;
    }, hasView?: boolean);
    Exit(): void;
}
