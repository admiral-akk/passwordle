import {io, Socket} from 'socket.io-client';
import {ServerToClientEvents, ClientToServerEvents} from './NetworkTypes';

export class SocketManager {
  socket: Socket<ServerToClientEvents, ClientToServerEvents>;
  constructor() {
    this.socket = io('http://localhost:4000/', {transports: ['websocket']});
    this.socket.on('connect', () => {
      console.log(`connected: ${this.socket.id}`);
    });
    this.socket.on('disconnect', () => {
      console.log(`disconnected: ${this.socket.id}`);
    });
  }

  RequestPublicLobby() {
    this.socket.emit('HostPublicLobby');
  }

  RequestPrivateLobby() {
    this.socket.emit('HostPrivateLobby');
  }

  RegisterGetPrivateLobbyId(callback: (lobbyId: string) => void) {
    this.socket.on('PrivateLobbyId', lobbyId => {
      callback(lobbyId);
    });
  }

  RegisterGetPublicLobbyId(callback: () => void) {
    this.socket.on('PublicLobbyId', () => {
      callback();
    });
  }
}
