import { ModelState } from './ModelState';
import { KeyboardView } from './view/KeyboardView';
export declare class KeyboardState extends ModelState<KeyboardView> {
    Reset(): void;
    private SetState;
    private keyState;
    constructor(hasView: boolean, input: (key: string) => void);
}
