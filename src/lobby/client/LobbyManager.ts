import {LobbyView} from './view/LobbyView';
import {NewLobby} from '../server/Lobby';
import {
  LobbyServerRequests,
  LobbyClientSocket,
} from '../server/LobbyNetworkTypes';
import {EndGameState} from '../../game/client/view/subview/EndGameView';

export class NewLobbyManager implements LobbyServerRequests {
  private view: LobbyView = new LobbyView();
  private model: NewLobby = new NewLobby(this.view, this);

  constructor(private socket: LobbyClientSocket) {
    RegisterSocket(socket, this.model);
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

function RegisterSocket(socket: LobbyClientSocket, model: NewLobby) {
  socket.on('EnterMenu', (lobbyId: string) => {
    model.EnterMenu(lobbyId);
  });
  socket.on('MatchFound', (lobbyId: string) => {
    model.MatchFound(lobbyId);
  });
}
