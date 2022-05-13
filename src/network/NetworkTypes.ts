import {Server, Socket} from 'socket.io';
import {ToServerGameEvents, ToClientGameEvents} from './GameNetworkTypes';
import {ToClientLobbyEvents, ToServerLobbyEvents} from './LobbyNetworkTypes';
import {LobbyServer} from '../lobby/server/LobbyServer';
import {PlayerId, ToPlayerId} from '../structs/PlayerId';
import {ToClientStartEvents, ToServerStartEvents} from './StartNetworkTypes';
import {SocketManager} from '../server/SocketManager';

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

export type ServerSocket = Socket<
  ToServerEvents,
  ToClientEvents,
  InterServerEvents,
  SocketData
>;

export function GetServer(
  app: Express.Application,
  socketManager: SocketManager,
  lobbyServer: LobbyServer
): Server<ToServerEvents, ToClientEvents, InterServerEvents, SocketData> {
  const http = require('http').Server(app);
  const io = new Server<
    ToServerEvents,
    ToClientEvents,
    InterServerEvents,
    SocketData
  >(http);

  io.on('connection', socket => {
    socket.onAny((...args: any[]) => {
      args.forEach(arg => {
        console.log(`Arg: ${arg}`);
      });
    });
    socket.data.playerId = ToPlayerId(socket.id);
    socketManager.AddSocket(socket);
    lobbyServer.PlayerJoins(socket);
    socket.on('ClientReady', () => socket.emit('ServerReady'));
    socket.emit('ServerReady');
  });

  http.listen(4000, () => {
    console.log('listening on *:4000');
  });
  return io;
}
