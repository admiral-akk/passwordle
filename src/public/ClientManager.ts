import {ClientId} from './structs/ClientId';
import {GameState} from './structs/GameState';
import {LobbyId} from './structs/LobbyId';
import {Move} from './structs/Move';

export class ClientManager {
  private lobbyId: string;
  private playerId: string;
  private state: State;

  constructor() {
    this.lobbyId = '';
    this.playerId = '';
    this.state = State.LoggedOut;
  }

  StartLobby() {
    if (this.state !== State.LoggedOut) {
      throw 'Already connected to server!';
    }
    Get<ClientId>('/start_lobby').then(clientId => {
      this.lobbyId = clientId.lobbyId;
      this.playerId = clientId.playerId;
      this.state = State.LoggedIn;
      console.log(`client id: ${clientId}`);
    });
  }

  JoinLobby(lobbyId: LobbyId) {
    if (this.state !== State.LoggedOut) {
      throw 'Already connected to server!';
    }
    Get<ClientId>(`/join_lobby/${lobbyId}`).then(clientId => {
      this.lobbyId = clientId.lobbyId;
      this.playerId = clientId.playerId;
      this.state = State.LoggedIn;
      console.log(`client id: ${clientId}`);
    });
  }

  GetState() {
    if (this.state !== State.LoggedIn) {
      throw 'Not connected to server!';
    }
    Get<GameState>(`/get_state/${this.lobbyId}/${this.playerId}`).then(
      gameState => {
        console.log(`game state: ${gameState}`);
      }
    );
  }

  SubmitMove(guess: string) {
    if (this.state !== State.LoggedIn) {
      throw 'Not connected to server!';
    }
    Post<Move>(`/submit_move/${this.lobbyId}`, new Move(guess, this.playerId));
  }
}

enum State {
  None,
  LoggedOut,
  LoggedIn,
}

function Post<T>(path: string, data: T) {
  return window.fetch(path, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

function Get<T>(path: string): Promise<T> {
  return window
    .fetch(`${path}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json());
}
