import {LobbyCommand} from '../LobbyCommand';
import {LobbyModel} from '../LobbyModel';
import {LobbyUpdate} from '../LobbyUpdate';
import {AddTypeString} from './TypeDecorator';

@AddTypeString('RematchRequested')
export class RematchRequested extends LobbyCommand {
  protected Apply(model: LobbyModel): LobbyUpdate {
    throw new Error('Method not implemented.');
  }
}

@AddTypeString('RematchRejected')
export class RematchRejected extends LobbyCommand {
  protected Apply(model: LobbyModel): LobbyUpdate {
    throw new Error('Method not implemented.');
  }
}
@AddTypeString('TheyRequestedRematch')
export class TheyRequestedRematch extends LobbyCommand {
  protected Apply(model: LobbyModel): LobbyUpdate {
    throw new Error('Method not implemented.');
  }
}
@AddTypeString('TheyRejectedRematch')
export class TheyRejectedRematch extends LobbyCommand {
  protected Apply(model: LobbyModel): LobbyUpdate {
    throw new Error('Method not implemented.');
  }
}
