import {Socket as ServerSocket} from 'socket.io';
import {Socket as ClientSocket} from 'socket.io-client';
import {InterServerEvents, SocketData} from './NetworkTypes';
export type StartClientSocket = ClientSocket<StartUpdates, StartActions>;
export type StartServerSocket = ServerSocket<
  StartActions,
  StartUpdates,
  InterServerEvents,
  SocketData
>;

// Things to ask the client/view to do
export interface StartUpdates {
  ServerReady: () => void;
}

// Things to ask the server/view to do
export interface StartActions {
  ClientReady: () => void;
}

export function RegisterStartClient(
  socket: StartClientSocket,
  client: StartUpdates
) {
  socket.on('ServerReady', () => client.ServerReady());
}
export function DeregisterStartClient(socket: StartClientSocket) {
  socket.removeAllListeners('ServerReady');
}

export function RegisterStartServer(
  socket: StartServerSocket,
  server: StartActions
) {
  socket.on('ClientReady', () => server.ClientReady());
}

export function DeregisterStartServer(socket: StartServerSocket) {
  socket.removeAllListeners('ClientReady');
}
