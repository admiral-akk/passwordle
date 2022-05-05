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

const LOBBY_ID_QUERY_NAME = 'lobbyId';

export class NewLobby implements LobbyClientRequests {
  private state: State = State.Loading;
  constructor(private view: LobbyView, private server: LobbyServerRequests) {
    view.Loading();
    if (FindLobbyIdInURL()) {
      server.JoinLobby(FindLobbyIdInURL()!);
    }
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
    const url = GenerateLobbyLink(lobbyId);
    this.state = State.InMenu;
    this.view.Menu(
      () => CopyToClipboard(url),
      () => this.FindMatch()
    );
  }

  FindMatch() {
    this.state = State.FindingMatch;
    this.view.FindingMatch();
    this.server.FindMatch();
  }
}

function FindLobbyIdInURL(): string | null {
  return new URLSearchParams(window.location.search).get(LOBBY_ID_QUERY_NAME);
}

function GenerateLobbyLink(lobbyId: string): string {
  const url = new URLSearchParams(window.location.search);
  url.append(LOBBY_ID_QUERY_NAME, lobbyId);
  return `${window.location.href}?${url.toString()}`;
}

function CopyToClipboard(url: string) {
  navigator.clipboard.writeText(url);
}
