import { WordKnowledge } from './WordKnowledge';
export declare class TargetProgress {
    knownCharacters: string[];
    constructor(knownCharacters?: string[]);
}
export declare function UpdateProgress(target: TargetProgress, knowledge: WordKnowledge): void;
export declare function Complete(target: TargetProgress): boolean;
