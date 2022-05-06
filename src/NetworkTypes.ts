import {Server, Socket} from 'socket.io';
import {
  GameClientToServerEvents,
  GameServerToClientEvents,
} from './game/network/GameNetworkTypes';
import {
  LobbyClientRequests,
  LobbyServerRequests,
} from './lobby/server/LobbyNetworkTypes';
import {NewLobbyServer} from './lobby/server/LobbyServer';
import {PlayerId, ToPlayerId} from './PlayerId';
import {SocketManager} from './SocketManager';

export interface ServerToClientEvents
  extends GameClientToServerEvents,
    LobbyClientRequests {}
export interface ClientToServerEvents
  extends GameServerToClientEvents,
    LobbyServerRequests {}

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
  lobbyServer: NewLobbyServer
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
    socket.data.playerId = ToPlayerId(socket.id);
    socketManager.AddSocket(socket);
    lobbyServer.PlayerJoins(socket);
  });

  http.listen(4000, () => {
    console.log('listening on *:4000');
  });
  return io;
}
