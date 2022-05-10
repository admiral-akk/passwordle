import { TargetProgress } from '../client/structs/TargetProgress';
import { YourPasswordView } from './view/YourPasswordView';
import { Word } from '../structs/Word';
import { LetterAnimation } from './view/struct/Animation';
import { ModelState } from './ModelState';
export declare class YourPasswordState extends ModelState<YourPasswordView> {
    private password;
    private knownCharacters;
    private state;
    constructor(hasView: boolean);
    SetPassword(password: Word): void;
    Reset(): void;
    Update(target: TargetProgress, playerGuess: string): LetterAnimation[];
    Lost(): boolean;
}
