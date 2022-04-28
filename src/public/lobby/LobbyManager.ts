import { SocketManager } from '../network/SocketManager';
import {ClientId} from '../struct/ClientId';
import {FindMatch, HostLobby, LobbyNetwork} from './LobbyNetwork';
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
  private clientId: ClientId;
  private socket: SocketManager;

  constructor(socket: SocketManager) {
    this.clientId = new ClientId();
    this.view = new LobbyView();
    this.socket = socket;
    this.socket.RegisterGetPrivateLobbyId((lobbyId:string) => this.HostingLobby(lobbyId));
    this.socket.RegisterGetPublicLobbyId((lobbyId:string) => this.FindingMatch(lobbyId));
    this.SetState(LobbyState.Start);
  }
  private HostingLobby(lobbyId: string) {
    console.log(`Hosting private lobby, ID: ${lobbyId}`);
    this.clientId.lobbyId = lobbyId;
    this.SetState(LobbyState.HostingMatch);
  }

  private FindingMatch(lobbyId: string) {
    console.log(`Hosting public lobby, ID: ${lobbyId}`);
    this.clientId.lobbyId = lobbyId;
    this.SetState(LobbyState.FindingMatch);
  }

  private SetState(newState: LobbyState) {
    switch (newState) {
      case LobbyState.Start:
        const lobbyId = FindLobbyIdInURL();
        if (!lobbyId) {
          this.SetState(LobbyState.LobbyMenu);
          return;
        }
        this.clientId.lobbyId = lobbyId!;
        this.SetState(LobbyState.JoiningMatch);
        break;
      case LobbyState.JoiningMatch:
        break;
      case LobbyState.LobbyMenu:
        this.view.Menu(
          () => this.socket.RequestPrivateLobby(),
          () => this.socket.RequestPublicLobby()
        );
        break;
      case LobbyState.FindingMatch:
        break;
      case LobbyState.HostingMatch:
          this.view.HostingMatch(GenerateLobbyLink(this.clientId.lobbyId));
        break;
      case LobbyState.MatchMade:
        break;
      case LobbyState.InGame:
        break;
    }
  }
}

function FindLobbyIdInURL(): string | null {
  return new URLSearchParams(window.location.search).get(LOBBY_ID_QUERY_NAME);
}

function GenerateLobbyLink(lobbyId: string): string {
  const url = new URLSearchParams(window.location.search);
  url.append(LOBBY_ID_QUERY_NAME, lobbyId);
  return window.location.href + url.toString();
}