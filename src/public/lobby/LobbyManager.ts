import {ClientId} from '../struct/ClientId';
import {FindMatch, HostLobby} from './LobbyNetwork';
import {LobbyView} from './view/LobbyView';

const LOBBY_ID_QUERY_NAME = 'lobbyId';

enum LobbyState {
  Start, // Nothing happened yet.
  JoiningMatch, // Found a lobbyId in the URL, trying to connect.
  LobbyMenu, // No lobbyId, asking user what kind of lobby to create.
  FindingMatch, // Finding a random player to play with.
  HostingMatch, // Hosting a game, waiting for someone to join the link shared.
  MatchMade, // Two players have joined the lobby, waiting for the server to send an initial state
  InGame, // Initial state recieved, passing players to actual game
}

export class LobbyManager {
  private view: LobbyView;
  private state: LobbyState;
  private clientId: ClientId;

  constructor() {
    this.clientId = new ClientId();
    this.state = LobbyState.Start;
    this.view = new LobbyView();

    const lobbyId = this.FindLobbyIdInURL();
    if (!lobbyId) {
      this.SetState(LobbyState.LobbyMenu);
      return;
    }
    this.clientId.lobbyId = lobbyId!;
    this.SetState(LobbyState.JoiningMatch);
  }

  private FindLobbyIdInURL(): string | null {
    return new URLSearchParams(window.location.search).get(LOBBY_ID_QUERY_NAME);
  }

  private HostingLobby(clientId: ClientId) {
    console.log(`old lobby id: ${this.clientId.lobbyId}`);
    console.log(`new lobby id: ${clientId.lobbyId}`);
    this.clientId = clientId;
    this.SetState(LobbyState.HostingMatch);
  }

  private FindingMatch(clientId: ClientId) {
    console.log(`old lobby id: ${this.clientId.lobbyId}`);
    console.log(`new lobby id: ${clientId.lobbyId}`);
    this.clientId = clientId;
    this.SetState(LobbyState.FindingMatch);
  }

  private SetState(newState: LobbyState) {
    switch (newState) {
      case LobbyState.Start:
        break;
      case LobbyState.JoiningMatch:
        break;
      case LobbyState.LobbyMenu:
        this.view.Menu(
          () => HostLobby((clientId) => this.HostingLobby(clientId)),
          () => FindMatch((clientId) => this.FindingMatch(clientId))
        );
        break;
      case LobbyState.FindingMatch:
        break;
      case LobbyState.HostingMatch:
        {
          const url = new URLSearchParams(window.location.search);
          url.append(LOBBY_ID_QUERY_NAME, this.clientId.lobbyId);
          this.view.HostingMatch(window.location.href + url.toString());
        }
        break;
      case LobbyState.MatchMade:
        break;
      case LobbyState.InGame:
        break;
    }
    this.state = newState;
  }
}
