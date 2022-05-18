import { AnnotatedWord } from '../model/PlayerModel';
import { Word } from '../structs/Word';
import { Command } from './Command';
export declare class AddKey extends Command {
    key: string;
    constructor(key: string);
}
export declare class LockGuess extends Command {
    constructor();
}
export declare class Delete extends Command {
    constructor();
}
export declare class TheyAddedKey extends Command {
    constructor();
}
export declare class TheyLockedGuess extends Command {
    constructor();
}
export declare class TheyDeleted extends Command {
    constructor();
}
export declare class RevealGuess extends Command {
    guess: Word;
    constructor(guess: Word);
}
export declare class YourForcedGuess extends Command {
    guess: Word;
    constructor(guess: Word);
}
export declare class RevealAnnotations extends Command {
    yourAnnotation: AnnotatedWord;
    theirAnnotation: AnnotatedWord;
    constructor(yourAnnotation: AnnotatedWord, theirAnnotation: AnnotatedWord);
}
export declare class TheyDisconnected extends Command {
    constructor();
}
export declare class GameFinished extends Command {
    yourAnnotation: AnnotatedWord;
    theirAnnotation: AnnotatedWord;
    constructor(yourAnnotation: AnnotatedWord, theirAnnotation: AnnotatedWord);
}
