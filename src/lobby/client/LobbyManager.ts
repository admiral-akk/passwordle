import {LobbyView} from './view/LobbyView';
import {NewLobby} from '../server/Lobby';
import {LobbyServerRequests} from '../server/LobbyNetworkTypes';
import {EndGameState} from '../../game/client/view/subview/EndGameView';
import {PlayerState} from '../../public/Player';
import {ClientSocket} from '../../public/ClientNetworking';

export class NewLobbyManager implements LobbyServerRequests {
  protected Register(socket: ClientSocket): void {
    socket.on('EnterMenu', (lobbyId: string) => {
      this.model.EnterMenu(lobbyId);
    });
    socket.on('MatchFound', (lobbyId: string) => {
      this.model.MatchFound(lobbyId);
    });
  }
  protected Deregister(socket: ClientSocket): void {
    throw new Error('Method not implemented.');
  }
  private view: LobbyView = new LobbyView();
  private model: NewLobby = new NewLobby(this.view, this);

  constructor(
    private socket: ClientSocket,
    setState: (nextState: PlayerState) => void
  ) {
    this.Register(socket);
  }

  JoinLobby(lobbyId: string) {
    this.socket.emit('JoinLobby', lobbyId);
  }

  FindMatch() {
    this.socket.emit('FindMatch');
  }

  ShowMenu() {
    this.model.GameEnded(EndGameState.Won);
  }
}
