import { WordKnowledge } from '../../structs/WordKnowledge';
import { ModelState } from './ModelState';
import { KeyboardView } from './view/KeyboardView';
export declare class KeyboardState extends ModelState<KeyboardView> {
    Reset(): void;
    private SetState;
    private keyState;
    constructor(view?: KeyboardView, input?: (key: string) => void);
    Update(knowledge: WordKnowledge[]): void;
}
