import {Socket as SSocket} from 'socket.io';
import {Socket as CSocket} from 'socket.io-client';
import {LobbyCommand} from './lobby/LobbyCommand';
import {Deserialize} from './lobby/LobbyDeserializeCommand';
import {ValidCommandConfirmed} from './struct/CommandConfirmed';

export interface CommandUpdates {
  LobbyConfirm(command: LobbyCommand): void;
}

export interface CommandActions {
  LobbyAction(command: LobbyCommand): void;
}

export type LobbyClient = CSocket<CommandUpdates, CommandActions>;
export type LobbyServer = SSocket<CommandActions, CommandUpdates>;

export interface Wrapper<CommandType> {
  Emit(command: CommandType): void;
}

export abstract class LobbyWrapper implements Wrapper<LobbyCommand> {
  private onCallback?: (command: LobbyCommand) => void;
  RegisterOnCallback(onCallback: (command: LobbyCommand) => void) {
    this.onCallback = onCallback;
  }
  abstract Emit(command: LobbyCommand): void;
}

export class LobbyClientWrapper extends LobbyWrapper {
  constructor(private socket: LobbyClient) {
    super();
    socket.on('LobbyConfirm', (command: LobbyCommand) => {
      this.On(command);
    });
  }

  Emit(command: LobbyCommand) {
    this.socket.emit('LobbyAction', command);
  }
}

export class LobbyServerWrapper extends LobbyWrapper {
  constructor(private socket: LobbyServer) {
    super();
    socket.on('LobbyAction', (command: LobbyCommand) => {
      this.On(command);
    });
  }

  Emit(command: LobbyCommand) {
    command.data.confirmed = ValidCommandConfirmed();
    this.socket.emit('LobbyConfirm', command);
  }
}
