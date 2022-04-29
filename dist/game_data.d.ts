import { History } from './public/game_history';
import { WordKnowledge } from './game/logic/Knowledge';
export declare class Game {
    history: History;
    id: string;
    private answer;
    constructor(id: string);
    Guess(guess: string): WordKnowledge;
}
