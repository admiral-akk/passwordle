import { Command } from '../Command';
import { GameModel } from '../PlayerModel';
export declare abstract class GameCommand implements Command {
    protected gameModel: GameModel;
    abstract execute(): void;
    abstract undo(): void;
    constructor(gameModel: GameModel);
}
