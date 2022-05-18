import {CommandData} from '../new/Command';
import {LobbyClientWrapper} from '../new/CommandNetwork';
import {CreatedLobby} from '../new/lobby/command/MenuCommands';
import {LobbyCommand} from '../new/lobby/LobbyCommand';
import {LobbyView} from '../new/lobby/LobbyView';
import {PlayerModel} from '../new/PlayerModel';
import {CommandId, ToCommandId} from '../new/struct/CommandId';
import {ClientSocket, GetSocket} from './ClientNetworking';

export class Player {
  private socket: ClientSocket = GetSocket();
  private currentCommandId: CommandId = ToCommandId(0);
  constructor() {
    const command = new CreatedLobby(new CommandData());
    command.data.commandId = this.currentCommandId;
    this.currentCommandId = ToCommandId(this.currentCommandId + 1);
    this.lobbySocket.Emit(command);
    this.lobbySocket.RegisterOnCallback((command: LobbyCommand) => {
      console.log(`Command type: ${command.type!}`);
      this.playerModel.Handle(command);
    });
  }
  private playerModel: PlayerModel = new PlayerModel(new LobbyView());
  private lobbySocket = new LobbyClientWrapper(this.socket);
}
