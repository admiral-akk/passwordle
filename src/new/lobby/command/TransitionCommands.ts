import {LobbyCommand} from '../LobbyCommand';
import {LobbyModel} from '../LobbyModel';
import {LobbyUpdate} from '../LobbyUpdate';
import {AddTypeString} from './TypeDecorator';

@AddTypeString('LobbyDesynced')
export class LobbyDesynced extends LobbyCommand {
  protected Apply(model: LobbyModel): LobbyUpdate {
    throw new Error('Method not implemented.');
  }
}

@AddTypeString('GameComplete')
export class GameComplete extends LobbyCommand {
  protected Apply(model: LobbyModel): LobbyUpdate {
    throw new Error('Method not implemented.');
  }
}
