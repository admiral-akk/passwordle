import {LobbyId} from '../../structs/LobbyId';
import {AnnotatedWord} from '../struct/AnnotatedWord';

enum LobbyState {
  None,
  InLobby,
  InGame,
}

export class LobbyModel {
  state: LobbyState = LobbyState.None;
  lobbyId?: LobbyId;
  playerCount = 0;
  rematchRequestCount = 0;
  requestedRematch = false;

  CreatedLobby(lobbyId: LobbyId) {
    this.state = LobbyState.InLobby;
    this.lobbyId = lobbyId;
    this.playerCount = 1;
  }

  JoinedLobby(lobbyId: LobbyId) {
    this.state = LobbyState.InLobby;
    this.lobbyId = lobbyId;
    this.playerCount = 2;
  }

  TheyJoinedLobby() {
    this.playerCount = 2;
  }

  StartedGame() {
    this.state = LobbyState.InGame;
  }

  GameFinished(yourPassword: AnnotatedWord, theirPassword: AnnotatedWord) {
    this.state = LobbyState.InLobby;
    this.rematchRequestCount = 0;
    this.requestedRematch = false;
  }

  RequestedRematch() {
    this.requestedRematch = true;
    this.rematchRequestCount++;
  }

  TheyRequestedRematch() {
    this.rematchRequestCount++;
  }

  RematchRejected(lobbyId: LobbyId) {
    this.lobbyId = lobbyId;
    this.playerCount = 1;
    this.rematchRequestCount = 0;
    this.requestedRematch = false;
  }
}
