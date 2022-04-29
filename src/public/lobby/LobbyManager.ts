import {ClientId} from '../struct/ClientId';
import {LobbySocket} from './network/LobbyNetworkEvents';
import {LobbyView} from './view/LobbyView';

const LOBBY_ID_QUERY_NAME = 'lobbyId';

enum LobbyState {
  Start, // Nothing happened yet.
  JoiningMatch, // Found a lobbyId in the URL, trying to connect.
  LobbyMenu, // No lobbyId, asking user what kind of lobby to create.
  FindingMatch, // Finding a random player to play with.
  HostingMatch, // Hosting a game, waiting for someone to join the link shared.
  LobbyReady, // Two players have joined the lobby, waiting for the server to send an initial state
  InGame, // Initial state recieved, passing players to actual game
}

export class LobbyManager {
  private view: LobbyView;
  private clientId: ClientId;
  private socket: LobbySocket;
  constructor(socket: LobbySocket) {
    this.clientId = new ClientId();
    this.view = new LobbyView();
    this.socket = socket;
    RegisterGetPrivateLobbyId(this.socket, (lobbyId: string) =>
      this.HostingLobby(lobbyId)
    );
    RegisterGetPublicLobbyId(this.socket, () => this.FindingMatch());
    RegisterLobbyReady(this.socket, () => this.LobbyReady());
    this.SetState(LobbyState.Start);
  }

  private HostingLobby(lobbyId: string) {
    console.log(`Hosting private lobby, ID: ${lobbyId}`);
    this.clientId.lobbyId = lobbyId;
    this.SetState(LobbyState.HostingMatch);
  }

  private FindingMatch() {
    this.SetState(LobbyState.FindingMatch);
  }

  private LobbyReady() {
    this.SetState(LobbyState.LobbyReady);
  }

  private SetState(newState: LobbyState) {
    switch (newState) {
      case LobbyState.Start:
        {
          const lobbyId = FindLobbyIdInURL();
          if (!lobbyId) {
            this.SetState(LobbyState.LobbyMenu);
            return;
          }
          this.clientId.lobbyId = lobbyId!;
          this.SetState(LobbyState.JoiningMatch);
        }
        break;
      case LobbyState.JoiningMatch:
        JoinPrivateLobby(this.socket, this.clientId.lobbyId);
        break;
      case LobbyState.LobbyMenu:
        this.view.Menu(
          () => RequestPrivateLobby(this.socket),
          () => RequestPublicLobby(this.socket)
        );
        break;
      case LobbyState.FindingMatch:
        this.view.FindingMatch();
        break;
      case LobbyState.HostingMatch:
        this.view.HostingMatch(GenerateLobbyLink(this.clientId.lobbyId));
        break;
      case LobbyState.LobbyReady:
        this.view.LobbyReady();
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
  return `${window.location.href}?${url.toString()}`;
}

function RegisterLobbyReady(socket: LobbySocket, callback: () => void) {
  socket.on('LobbyReady', () => {
    callback();
  });
}

function RequestPublicLobby(socket: LobbySocket) {
  socket.emit('HostPublicLobby');
}

function RequestPrivateLobby(socket: LobbySocket) {
  socket.emit('HostPrivateLobby');
}

function JoinPrivateLobby(socket: LobbySocket, lobbyId: string) {
  socket.emit('JoinPrivateLobby', lobbyId);
}

function RegisterGetPrivateLobbyId(
  socket: LobbySocket,
  callback: (lobbyId: string) => void
) {
  socket.on('PrivateLobbyId', lobbyId => {
    callback(lobbyId);
  });
}

function RegisterGetPublicLobbyId(socket: LobbySocket, callback: () => void) {
  socket.on('PublicLobbyId', () => {
    callback();
  });
}
