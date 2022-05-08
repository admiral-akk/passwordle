import {LobbyView} from './view/LobbyView';
import {Lobby} from '../server/Lobby';
import {
  LobbyClientRequests,
  LobbyServerRequests,
} from '../server/LobbyNetworkTypes';
import {EndGameState} from '../../game/client/view/subview/EndGameView';
import {ClientSocket} from '../../public/ClientNetworking';
import {PlayerState} from '../../public/PlayerState';
import {ClientGame} from '../../game/client/ClientGame';
import {FindLobbyIdInURL, LobbyId} from '../LobbyId';

export class LobbyManager
  extends PlayerState
  implements LobbyServerRequests, LobbyClientRequests
{
  protected Register(socket: ClientSocket): void {
    socket.on('EnterMenu', (lobbyId: LobbyId) => {
      this.EnterMenu(lobbyId);
    });
    socket.on('MatchFound', (lobbyId: LobbyId) => {
      this.MatchFound(lobbyId);
    });
    socket.on('FindingMatch', () => {
      this.FindingMatch();
    });
  }
  protected Deregister(socket: ClientSocket): void {
    socket.removeAllListeners('EnterMenu');
    socket.removeAllListeners('MatchFound');
    socket.removeAllListeners('FindingMatch');
  }
  private view: LobbyView = new LobbyView();
  private model: Lobby = new Lobby(this.view, this);

  constructor() {
    super();
  }

  protected Enter(): void {
    const lobbyId = FindLobbyIdInURL();
    if (lobbyId) {
      this.JoinLobby(lobbyId!);
    } else {
      this.RequestLobbyId();
    }
  }

  protected Exit(): void {
    this.model.Exit();
  }

  RequestLobbyId(): void {
    this.socket!.emit('RequestLobbyId');
  }

  EnterMenu(lobbyId: LobbyId) {
    this.model.EnterMenu(lobbyId);
  }
  MatchFound(lobbyId: LobbyId) {
    this.model.MatchFound(lobbyId);
    this.SwitchState(new ClientGame());
  }

  JoinLobby(lobbyId: LobbyId) {
    this.socket!.emit('JoinLobby', lobbyId);
  }

  FindMatch() {
    this.socket!.emit('FindMatch');
  }

  FindingMatch() {
    this.model.FindingMatch();
  }

  ShowMenu() {
    this.model.GameEnded(EndGameState.Won);
  }
}
