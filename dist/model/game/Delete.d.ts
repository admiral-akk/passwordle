import { GameCommand } from './GameCommand';
export declare class Delete extends GameCommand {
    private deletedChar?;
    execute(): void;
    undo(): void;
}
