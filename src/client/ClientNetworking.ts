import {io, Socket} from 'socket.io-client';
import Actions, {Updates} from '../network/NetworkTypes';

export type ClientSocket = Socket<Updates, Actions>;

export function GetSocket(): ClientSocket {
  let socket: ClientSocket;
  if (window.location.href.includes('localhost')) {
    socket = io('http://localhost:4000/', {transports: ['websocket']});
  } else {
    socket = io();
  }
  socket.onAny((...args: any[]) => {
    args.forEach(arg => {
      console.log(`Arg: ${arg}`);
    });
  });
  socket.on('connect', () => {
    console.log(`connected: ${socket.id}`);
  });
  socket.on('disconnect', () => {
    console.log(`disconnected: ${socket.id}`);
  });
  return socket;
}
