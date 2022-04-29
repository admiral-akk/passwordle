import {io, Socket} from 'socket.io-client';
import {ServerToClientEvents, ClientToServerEvents} from '../NetworkTypes';

export function GetSocket(): Socket<
  ServerToClientEvents,
  ClientToServerEvents
> {
  const socket = io('http://localhost:4000/', {transports: ['websocket']});
  socket.on('connect', () => {
    console.log(`connected: ${socket.id}`);
  });
  socket.on('disconnect', () => {
    console.log(`disconnected: ${socket.id}`);
  });
  return socket;
}
