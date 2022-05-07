import {io, Socket} from 'socket.io-client';
import {ServerToClientEvents, ClientToServerEvents} from '../NetworkTypes';

export function GetSocket(): Socket<
  ServerToClientEvents,
  ClientToServerEvents
> {
  let socket: Socket<ServerToClientEvents, ClientToServerEvents>;
  if (window.location.href.includes('localhost')) {
    socket = io('http://localhost:4000/', {transports: ['websocket']});
  } else {
    socket = io();
  }
  socket.on('connect', () => {
    console.log(`connected: ${socket.id}`);
  });
  socket.on('disconnect', () => {
    console.log(`disconnected: ${socket.id}`);
  });
  return socket;
}
