import {Socket as SSocket} from 'socket.io';
import {Socket as CSocket} from 'socket.io-client';
import {
  GameActions,
  GameUpdates,
  RegisterGameClient,
  DeregisterGameServer,
  RegisterGameServer,
  DeregisterGameClient,
} from './GameNetworkTypes';
import {
  DeregisterLobbyClient,
  DeregisterLobbyServer,
  RegisterLobbyClient,
  RegisterLobbyServer,
  LobbyUpdates,
  LobbyActions,
} from './LobbyNetworkTypes';
import {PlayerId} from '../structs/PlayerId';
import {
  DeregisterStartClient,
  DeregisterStartServer,
  RegisterStartClient,
  RegisterStartServer,
  StartUpdates,
  StartActions,
} from './StartNetworkTypes';

// Actions are things that the client tries to do.
export interface Actions extends GameActions, LobbyActions, StartActions {}
// Updates are state changes that the server indicates have happened.
export interface Updates extends GameUpdates, LobbyUpdates, StartUpdates {}

export interface InterServerEvents {}
export interface SocketData {
  playerId: PlayerId;
}

export type ClientSocket = CSocket<Updates, Actions>;
export type ServerSocket = SSocket<
  Actions,
  Updates,
  InterServerEvents,
  SocketData
>;

export function RegisterClient(socket: ClientSocket, client: Updates) {
  RegisterGameClient(socket, client);
  RegisterLobbyClient(socket, client);
  RegisterStartClient(socket, client);
}
export function DeregisterClient(socket: ClientSocket) {
  DeregisterGameClient(socket);
  DeregisterLobbyClient(socket);
  DeregisterStartClient(socket);
}

export function RegisterServer(socket: ServerSocket, server: Actions) {
  RegisterGameServer(socket, server);
  RegisterLobbyServer(socket, server);
  RegisterStartServer(socket, server);
}

export function DeregisterServer(socket: ServerSocket) {
  DeregisterGameServer(socket);
  DeregisterLobbyServer(socket);
  DeregisterStartServer(socket);
}
