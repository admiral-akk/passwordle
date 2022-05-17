import {Command} from './Command';

export interface CommandUpdates {
  Confirm(command: Command): void;
}

export interface CommandActions {
  Action(command: Command): void;
}
