import {LobbyView} from './view/LobbyView';
import {NewLobby} from '../server/Lobby';
import {
  LobbyClientRequests,
  LobbyServerRequests,
} from '../server/LobbyNetworkTypes';
import {EndGameState} from '../../game/client/view/subview/EndGameView';
import {ClientSocket} from '../../public/ClientNetworking';
import {PlayerState} from '../../public/PlayerState';
import {ClientGame} from '../../game/client/ClientGame';

export class NewLobbyManager
  extends PlayerState
  implements LobbyServerRequests, LobbyClientRequests
{
  protected Register(socket: ClientSocket): void {
    socket.on('EnterMenu', (lobbyId: string) => {
      this.EnterMenu(lobbyId);
    });
    socket.on('MatchFound', (lobbyId: string) => {
      this.MatchFound(lobbyId);
    });
    socket.on('GameEnded', (ending: EndGameState) => {
      this.GameEnded(ending);
    });
  }
  protected Deregister(socket: ClientSocket): void {
    socket.removeAllListeners('EnterMenu');
    socket.removeAllListeners('MatchFound');
    socket.removeAllListeners('GameEnded');
  }
  private view: LobbyView = new LobbyView();
  private model: NewLobby = new NewLobby(this.view, this);

  constructor() {
    super();
  }
  EnterMenu(lobbyId: string) {
    this.model.EnterMenu(lobbyId);
  }
  MatchFound(lobbyId: string) {
    this.model.MatchFound(lobbyId);
    this.Exit(new ClientGame(() => {}));
  }
  GameEnded(ending: EndGameState) {}

  JoinLobby(lobbyId: string) {
    this.socket!.emit('JoinLobby', lobbyId);
  }

  FindMatch() {
    this.socket!.emit('FindMatch');
  }

  ShowMenu() {
    this.model.GameEnded(EndGameState.Won);
  }
}
