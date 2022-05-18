import { Command } from './Command';
export declare abstract class CommandHandler<ModelType, UpdateType> {
    private commands;
    private confirmedCount;
    protected abstract Apply(update: UpdateType): void;
    protected abstract Undo(update: UpdateType): void;
    protected abstract Execute(command: Command<ModelType, UpdateType>): void;
    Input(command: Command<ModelType, UpdateType>): void;
}
