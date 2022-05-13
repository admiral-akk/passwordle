import {Socket as ServerSocket} from 'socket.io';
import {Socket as ClientSocket} from 'socket.io-client';
import {InterServerEvents, SocketData} from './NetworkTypes';
export type StartClientSocket = ClientSocket<
  ToClientStartEvents,
  ToServerStartEvents
>;
export type StartServerSocket = ServerSocket<
  ToServerStartEvents,
  ToClientStartEvents,
  InterServerEvents,
  SocketData
>;

// Things to ask the client/view to do
export interface ToClientStartEvents {
  ServerReady: () => void;
}

// Things to ask the server/view to do
export interface ToServerStartEvents {
  ClientReady: () => void;
}
