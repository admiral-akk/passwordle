import { History, Move } from './game_history';
import { WordKnowledge } from './knowledge';
export interface INetworkMessage {
    type: string;
    id: string;
}
export interface INewNetworkMessage {
    playerName: string;
    id: string;
}
export declare abstract class BaseNetworkMessage<T> implements INetworkMessage {
    type: string;
    detail: T;
    id: string;
    constructor(type: string, id: string, detail: T);
}
export declare abstract class BaseMessage implements INewNetworkMessage {
    id: string;
    playerName: string;
    constructor(id?: string, playerName?: string);
}
export declare class StartNewGameMessage extends BaseMessage {
}
export declare class EnterGameMessage extends BaseMessage {
}
export declare class GameStateMesssage extends BaseMessage {
    history: History;
    constructor(id?: string, playerName?: string, history?: History);
}
export declare class MoveMessage extends BaseMessage {
    move: Move;
    constructor(id: string | undefined, playerName: string | undefined, move: Move);
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
export declare class GameStateMessage extends BaseNetworkMessage<History> {
    constructor(id: string, gameHistory: History);
}
