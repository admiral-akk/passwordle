import {Socket as ServerSocket} from 'socket.io';
import {Socket as ClientSocket} from 'socket.io-client';
import {InterServerEvents, SocketData} from '../../NetworkTypes';
export type StartClientSocket = ClientSocket<
  StartClientRequests,
  StartServerRequests
>;
export type LobbyServerSocket = ServerSocket<
  StartServerRequests,
  StartClientRequests,
  InterServerEvents,
  SocketData
>;

// Things to ask the client/view to do
export interface StartClientRequests {
  ServerReady: () => void;
}

// Things to ask the server/view to do
export interface StartServerRequests {
  ClientReady: () => void;
}
