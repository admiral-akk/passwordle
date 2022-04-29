import {Socket} from 'socket.io';
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from './public/network/NetworkTypes';
import {InterServerEvents, SocketData} from './ServerNetworkTypes';

export class ServerSocket {
  private socket: Socket<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
  >;
  constructor(
    socket: Socket<
      ClientToServerEvents,
      ServerToClientEvents,
      InterServerEvents,
      SocketData
    >
  ) {
    this.socket = socket;
    console.log(`connected: ${socket.id}`);
    this.socket.on('HostPrivateLobby', () => {
      console.log(`HostPrivateLobby request from: ${socket.id}`);
      this.socket.emit('PrivateLobbyId', 'HI');
    });
    this.socket.on('HostPublicLobby', () => {
      console.log(`HostPublicLobby request from: ${socket.id}`);
      this.socket.emit('PublicLobbyId');
    });
  }
}
