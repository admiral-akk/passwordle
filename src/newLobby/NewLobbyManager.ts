import {LobbyView} from '../lobby/client/view/LobbyView';
import {NewLobby} from './NewLobby';
import {
  LobbyServerRequests,
  NewLobbyClientSocket,
} from './NewLobbyNetworkTypes';

export class NewLobbyManager implements LobbyServerRequests {
  private view: LobbyView = new LobbyView();
  private model: NewLobby = new NewLobby(this.view, this);

  constructor(private socket: NewLobbyClientSocket) {
    RegisterSocket(socket, this.model);
  }

  FindMatch() {
    this.socket.emit('FindMatch');
  }
}

function RegisterSocket(socket: NewLobbyClientSocket, model: NewLobby) {
  socket.on('EnterMenu', (lobbyId: string) => {
    model.EnterMenu(lobbyId);
  });
  socket.on('MatchFound', (lobbyId: string) => {
    model.MatchFound(lobbyId);
  });
  socket.on('GameEnded', () => model.GameEnded());
}
