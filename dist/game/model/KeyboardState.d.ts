import { ModelState } from './ModelState';
import { KeyboardView } from './view/KeyboardView';
export declare class KeyboardState extends ModelState<KeyboardView> {
    Reset(): void;
    constructor(hasView: boolean, input: (key: string) => void);
}
