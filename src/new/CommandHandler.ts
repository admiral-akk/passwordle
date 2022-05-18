import {Command} from './Command';

export abstract class CommandHandler<ModelType, UpdateType> {
  private commands: Command<ModelType, UpdateType>[] = [];

  // Represents the count of events sent back by the server.
  // Anything after this is subject to reversal.
  // This assumes that moves can't be submitted retroactively.
  private confirmedCount = 0;

  protected abstract Apply(update: UpdateType): void;
  protected abstract Undo(update: UpdateType): void;

  protected abstract Execute(command: Command<ModelType, UpdateType>): void;

  Input(command: Command<ModelType, UpdateType>) {
    // If it's pending, just add it to the end.
    if (!command.data.confirmed) {
      this.commands.push(command);
      this.Execute(command);
      this.Apply(this.commands[-1].update!);
      return;
    }

    // Unwind all of the unconfirmed commands.
    for (let i = this.commands.length - 1; i >= this.confirmedCount; i--) {
      this.Undo(this.commands[i].update!);
    }

    // Remove the command from the pending list if it's there.
    if (command.data.commandId) {
      const index = this.commands
        .slice(this.confirmedCount + 1)
        .findIndex(
          (pendingCommand: Command<ModelType, UpdateType>) =>
            pendingCommand.data.commandId === command.data.commandId
        );
      if (index >= 0) {
        this.commands.splice(index + this.confirmedCount + 1, 1);
      }
    }

    // Apply the confirmed command.
    this.confirmedCount++;
    this.commands.splice(this.confirmedCount, 0, command);

    // Reapply the commands.
    for (let i = this.confirmedCount; i < this.commands.length; i++) {
      this.Apply(this.commands[i].update!);
    }
  }
}
