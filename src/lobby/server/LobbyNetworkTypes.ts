import {Socket as ServerSocket} from 'socket.io';
import {Socket as ClientSocket} from 'socket.io-client';
import {InterServerEvents, SocketData} from '../../NetworkTypes';
export type NewLobbyClientSocket = ClientSocket<
  LobbyClientRequests,
  LobbyServerRequests
>;
export type NewLobbyServerSocket = ServerSocket<
  LobbyServerRequests,
  LobbyClientRequests,
  InterServerEvents,
  SocketData
>;

// Things to ask the client/view to do
export interface LobbyClientRequests {
  EnterMenu: (lobbyId: string) => void;
  MatchFound: (lobbyId: string) => void;
  GameEnded: () => void;
}

// Things to ask the server/view to do
export interface LobbyServerRequests {
  FindMatch: () => void;
  JoinLobby: (lobbyId: string) => void;
}
