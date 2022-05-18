import { GameModel } from '../PlayerModel';
import { GameCommand } from './GameCommand';
export declare class AddChar extends GameCommand {
    private key;
    constructor(model: GameModel, key: string);
    private successful?;
    execute(): void;
    undo(): void;
}
