import { WordKnowledge } from './knowledge';
export declare abstract class NetworkMessage<T> {
    type: string;
    detail: T;
    constructor(type: string, detail: T);
}
export declare class SubmitWordMessage extends NetworkMessage<string> {
    constructor(guess: string);
}
export declare class KnowledgeUpdateMessage extends NetworkMessage<WordKnowledge> {
    constructor(knowledge: WordKnowledge);
}
export declare class NewGameMessage extends NetworkMessage<boolean> {
    constructor();
}
export declare class GameStartedMessage extends NetworkMessage<boolean> {
    constructor();
}
