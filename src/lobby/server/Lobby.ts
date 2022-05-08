import {EndGameState} from '../../game/client/view/subview/EndGameView';
import {LobbyView} from '../client/view/LobbyView';
import {GenerateLobbyLink, LobbyId} from '../LobbyId';
import {LobbyClientRequests, LobbyServerRequests} from './LobbyNetworkTypes';

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

export class Lobby implements LobbyClientRequests {
  private state: State = State.Loading;
  constructor(private view: LobbyView, private server: LobbyServerRequests) {
    view.Loading();
  }

  Exit() {
    this.view.Exit();
  }

  FindingMatch() {
    this.state = State.FindingMatch;
    this.view.FindingMatch();
  }

  GameEnded(ending: EndGameState) {
    this.state = State.EndGame;
    this.view.GameEnded(ending);
  }

  MatchFound(lobbyId: LobbyId) {
    this.state = State.FoundMatch;
    this.view.LobbyReady();
  }

  EnterMenu(lobbyId: LobbyId) {
    const url = GenerateLobbyLink(lobbyId);
    this.state = State.InMenu;
    this.view.Menu(
      () => CopyToClipboard(url),
      () => this.server.FindMatch()
    );
  }
}

function CopyToClipboard(url: string) {
  navigator.clipboard.writeText(url);
}
