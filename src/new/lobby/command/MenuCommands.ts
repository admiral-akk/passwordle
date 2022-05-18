import {CommandData} from '../../Command';
import {LobbyCommand} from '../LobbyCommand';
import {LobbyModel, LobbyState} from '../LobbyModel';
import {LobbyUpdate} from '../LobbyUpdate';
import {AddTypeString} from './TypeDecorator';

@AddTypeString('CreatedLobby')
export class CreatedLobby extends LobbyCommand {
  constructor(data: CommandData) {
    super(data);
  }
  protected Apply(model: LobbyModel): LobbyUpdate {
    const update = new LobbyUpdate();
    update.SetLobbyId(model, this.data.lobbyId!);
    update.SetState(model, LobbyState.InLobby);
    update.SetPlayerCount(model, 1);
    return update;
  }
}

@AddTypeString('JoinedLobby')
export class JoinedLobby extends LobbyCommand {
  protected Apply(model: LobbyModel): LobbyUpdate {
    const update = new LobbyUpdate();
    update.SetLobbyId(model, this.data.lobbyId!);
    update.SetState(model, LobbyState.InLobby);
    update.SetPlayerCount(model, 2);
    return update;
  }
}

@AddTypeString('TheyJoinedLobby')
export class TheyJoinedLobby extends LobbyCommand {
  protected Apply(model: LobbyModel): LobbyUpdate {
    const update = new LobbyUpdate();
    update.SetPlayerCount(model, 2);
    return update;
  }
}

@AddTypeString('TheyLeftLobby')
export class TheyLeftLobby extends LobbyCommand {
  protected Apply(model: LobbyModel): LobbyUpdate {
    const update = new LobbyUpdate();
    update.SetPlayerCount(model, 1);
    return update;
  }
}

@AddTypeString('LookingForMatch')
export class LookingForMatch extends LobbyCommand {
  protected Apply(model: LobbyModel): LobbyUpdate {
    const update = new LobbyUpdate();
    update.SetState(model, LobbyState.LookingForMatch);
    return update;
  }
}
