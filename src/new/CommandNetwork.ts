import {Command} from './Command';

export interface CommandUpdates {
  ConfirmedAction(command: Command): void;
}

export interface CommandActions {
  Action(command: Command): void;
}
