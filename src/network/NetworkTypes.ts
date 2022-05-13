import {Server, Socket as SSocket} from 'socket.io';
import {
  ToServerGameEvents,
  ToClientGameEvents,
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
  ToClientLobbyEvents,
  ToServerLobbyEvents,
} from './LobbyNetworkTypes';
import {LobbyServer} from '../lobby/server/LobbyServer';
import {PlayerId, ToPlayerId} from '../structs/PlayerId';
import {
  DeregisterStartClient,
  DeregisterStartServer,
  RegisterStartClient,
  RegisterStartServer,
  ToClientStartEvents,
  ToServerStartEvents,
} from './StartNetworkTypes';
import {Socket as CSocket} from 'socket.io-client';

export interface ToClientEvents
  extends ToClientGameEvents,
    ToClientLobbyEvents,
    ToClientStartEvents {}
export interface ToServerEvents
  extends ToServerGameEvents,
    ToServerLobbyEvents,
    ToServerStartEvents {}

export interface InterServerEvents {}
export interface SocketData {
  playerId: PlayerId;
}

export type ClientSocket = CSocket<ToClientEvents, ToServerEvents>;
export type ServerSocket = SSocket<
  ToServerEvents,
  ToClientEvents,
  InterServerEvents,
  SocketData
>;

export function RegisterClient(socket: ClientSocket, client: ToClientEvents) {
  RegisterGameClient(socket, client);
  RegisterLobbyClient(socket, client);
  RegisterStartClient(socket, client);
}
export function DeregisterClient(socket: ClientSocket) {
  DeregisterGameClient(socket);
  DeregisterLobbyClient(socket);
  DeregisterStartClient(socket);
}

export function RegisterServer(socket: ServerSocket, server: ToServerEvents) {
  RegisterGameServer(socket, server);
  RegisterLobbyServer(socket, server);
  RegisterStartServer(socket, server);
}

export function DeregisterServer(socket: ServerSocket) {
  DeregisterGameServer(socket);
  DeregisterLobbyServer(socket);
  DeregisterStartServer(socket);
}
