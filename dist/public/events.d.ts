import { History } from './game_history';
import { WordKnowledge } from '../game/logic/Knowledge';
export declare class SubmitWordEvent extends CustomEvent<string> {
    constructor(guess: string);
}
export declare class SubmitCommand extends CustomEvent<null> {
    constructor();
}
export declare class DeleteEvent extends CustomEvent<null> {
    constructor();
}
export declare class AddCharEvent extends CustomEvent<string> {
    constructor(char: string);
}
export declare class KnowledgeUpdateEvent extends CustomEvent<WordKnowledge> {
    constructor(knowledge: WordKnowledge);
}
export declare class NewGameEvent extends CustomEvent<null> {
    constructor();
}
export declare class GameStartedEvent extends CustomEvent<null> {
    constructor();
}
export declare class GameHistoryEvent extends CustomEvent<History> {
    constructor(gameHistory: History);
}
