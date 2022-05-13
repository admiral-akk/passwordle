import {Socket as ServerSocket} from 'socket.io';
import {Socket as ClientSocket} from 'socket.io-client';
import {InterServerEvents, SocketData} from './NetworkTypes';
import {LobbyId} from '../structs/LobbyId';
export type LobbyClientSocket = ClientSocket<
  ToClientLobbyEvents,
  ToServerLobbyEvents
>;
export type LobbyServerSocket = ServerSocket<
  ToServerLobbyEvents,
  ToClientLobbyEvents,
  InterServerEvents,
  SocketData
>;

// Things to ask the client/view to do
export interface ToClientLobbyEvents {
  EnterMenu: (lobbyId: LobbyId) => void;
  MatchFound: (lobbyId: LobbyId) => void;
  GameReady: () => void;
  FindingMatch: () => void;
}

// Things to ask the server/view to do
export interface ToServerLobbyEvents {
  RequestLobbyId: () => void;
  JoinLobby: (lobbyId: LobbyId) => void;
  FindMatch: () => void;
  RequestRematch: () => void;
  DeclineRematch: () => void;
}
