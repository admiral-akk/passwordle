import { WordKnowledge } from './WordKnowledge';
export declare class TargetProgress {
    knownCharacters: string[];
    constructor(knownCharacters?: string[]);
    UpdateProgress(knowledge: WordKnowledge): void;
}
export declare function Complete(progress: TargetProgress): boolean;
