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

// How can we automate this so it simply registers every function in the interface?
export function RegisterLobbyClient(
  socket: LobbyClientSocket,
  client: ToClientLobbyEvents
) {
  socket.on('EnterMenu', (lobbyId: LobbyId) => client.EnterMenu(lobbyId));
  socket.on('MatchFound', (lobbyId: LobbyId) => client.MatchFound(lobbyId));
  socket.on('GameReady', () => client.GameReady());
  socket.on('FindingMatch', () => client.FindingMatch());
}
export function DeregisterLobbyClient(socket: LobbyClientSocket) {
  socket.removeAllListeners('EnterMenu');
  socket.removeAllListeners('MatchFound');
  socket.removeAllListeners('GameReady');
  socket.removeAllListeners('FindingMatch');
}

export function RegisterLobbyServer(
  socket: LobbyServerSocket,
  server: ToServerLobbyEvents
) {
  socket.on('RequestLobbyId', () => server.RequestLobbyId());
  socket.on('JoinLobby', (lobbyId: LobbyId) => server.JoinLobby(lobbyId));
  socket.on('FindMatch', () => server.FindMatch());
  socket.on('RequestRematch', () => server.RequestRematch());
  socket.on('DeclineRematch', () => server.DeclineRematch());
}

export function DeregisterLobbyServer(socket: LobbyServerSocket) {
  socket.removeAllListeners('RequestLobbyId');
  socket.removeAllListeners('JoinLobby');
  socket.removeAllListeners('FindMatch');
  socket.removeAllListeners('RequestRematch');
  socket.removeAllListeners('DeclineRematch');
}

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
