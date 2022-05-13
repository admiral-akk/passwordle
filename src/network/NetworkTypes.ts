import {Server, Socket} from 'socket.io';
import {
  GameClientToServerEvents,
  GameServerToClientEvents,
} from './GameNetworkTypes';
import {LobbyClientRequests, LobbyServerRequests} from './LobbyNetworkTypes';
import {LobbyServer} from '../lobby/server/LobbyServer';
import {PlayerId, ToPlayerId} from '../structs/PlayerId';
import {StartClientRequests, StartServerRequests} from './StartNetworkTypes';
import {SocketManager} from '../server/SocketManager';

export interface ServerToClientEvents
  extends GameServerToClientEvents,
    LobbyClientRequests,
    StartClientRequests {}
export interface ClientToServerEvents
  extends GameClientToServerEvents,
    LobbyServerRequests,
    StartServerRequests {}

export interface InterServerEvents {}
export interface SocketData {
  playerId: PlayerId;
}

export type ServerSocket = Socket<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>;

export function GetServer(
  app: Express.Application,
  socketManager: SocketManager,
  lobbyServer: LobbyServer
): Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
> {
  const http = require('http').Server(app);
  const io = new Server<
    ClientToServerEvents,
    ServerToClientEvents,
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
