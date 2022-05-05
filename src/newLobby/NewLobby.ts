import {LobbyView} from '../lobby/client/view/LobbyView';
import {LobbyClientRequests, LobbyServerRequests} from './NewLobbyNetworkTypes';

enum State {
  Loading,
  JoiningMatch,
  MatchNotFound,
  InMenu,
  FindingMatch,
  FoundMatch,
  InGame,
  EndGame,
}

export class NewLobby implements LobbyClientRequests {
  private state: State = State.Loading;
  constructor(private view: LobbyView, private server: LobbyServerRequests) {
    view.Loading();
  }
  GameEnded() {
    this.state = State.EndGame;
    this.view.GameEnded();
    setTimeout(() => {
      this.EnterMenu('');
    }, 1000);
  }

  MatchFound(lobbyId: string) {
    this.state = State.FoundMatch;
    this.view.LobbyReady();
    setTimeout(() => {
      this.EnterGame();
    }, 1000);
  }

  EnterGame() {
    this.state = State.InGame;
    this.view.InGame();
  }

  EnterMenu(lobbyId: string) {
    this.state = State.InMenu;
    this.view.Menu(
      () => {},
      () => this.FindMatch()
    );
  }

  FindMatch() {
    this.state = State.FindingMatch;
    this.view.FindingMatch();
    this.server.FindMatch();
  }
}
