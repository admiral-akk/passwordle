import { WordKnowledge } from './knowledge';
export interface INetworkMessage {
    type: string;
    id: string;
}
export declare abstract class BaseNetworkMessage<T> implements INetworkMessage {
    type: string;
    detail: T;
    id: string;
    constructor(type: string, id: string, detail: T);
}
export declare class SubmitWordMessage extends BaseNetworkMessage<string> {
    constructor(guess: string, id: string);
}
export declare class KnowledgeUpdateMessage extends BaseNetworkMessage<WordKnowledge> {
    constructor(knowledge: WordKnowledge, id: string);
}
export declare class NewGameMessage extends BaseNetworkMessage<boolean> {
    constructor();
}
export declare class GameStartedMessage extends BaseNetworkMessage<boolean> {
    constructor(id: string);
}
export declare class PollingMessage extends BaseNetworkMessage<boolean> {
    constructor(id: string);
}
