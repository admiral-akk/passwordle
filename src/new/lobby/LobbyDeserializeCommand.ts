import {CommandData} from '../Command';
import commands from './command/LobbyCommands';
import {LobbyCommand} from './LobbyCommand';

const TYPE_TO_COMMAND_CONSTRUCTOR: Record<
  string,
  (data: CommandData) => LobbyCommand
> = GenerateRegistry();

function GenerateRegistry(): Record<
  string,
  (data: CommandData) => LobbyCommand
> {
  const map: Record<string, (data: CommandData) => LobbyCommand> = {};
  commands.forEach(command => {
    const sample = new command(new CommandData());
    map[sample.type!] = (data: CommandData) => new command(data);
  });
  return map;
}

export function Deserialize(command: LobbyCommand): LobbyCommand {
  return TYPE_TO_COMMAND_CONSTRUCTOR[command.type!](command.data);
}
