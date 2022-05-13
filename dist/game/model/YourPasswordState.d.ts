import { TargetProgress } from '../../structs/TargetProgress';
import { YourPasswordView } from './view/YourPasswordView';
import { Word } from '../../structs/Word';
import { LetterAnimation } from './view/struct/Animation';
import { ModelState } from './ModelState';
export declare class YourPasswordState extends ModelState<YourPasswordView> {
    password: Word | null;
    knownCharacters: string[];
    private state;
    SetPassword(password: Word): void;
    GetPassword(): Word;
    Update(target: TargetProgress, playerGuess: string): LetterAnimation[];
    GetProgress(): TargetProgress;
    Lost(): boolean;
}
