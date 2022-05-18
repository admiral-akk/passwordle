import { GameModel } from '../PlayerModel';
import { GameCommand } from './GameCommand';
export declare class Input extends GameCommand {
    private key;
    constructor(model: GameModel, key: string);
    execute(): void;
    undo(): void;
}
