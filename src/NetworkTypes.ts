import {Server} from 'socket.io';
import {GameServerToClientEvents} from './game/client/GameNetworkEvents';
import {
  LobbyClientToServerEvents,
  LobbyServerToClientEvents,
} from './lobby/client/LobbyNetworkEvents';
import {Lobby} from './lobby/Lobby';
import {LobbyServer} from './lobby/LobbyServer';

export interface ServerToClientEvents
  extends LobbyServerToClientEvents,
    GameServerToClientEvents {}
export interface ClientToServerEvents
  extends LobbyClientToServerEvents,
    GameServerToClientEvents {}

export interface InterServerEvents {
  HandoffLobby: (lobby: Lobby) => void;
}
export interface SocketData {
  name: string;
}

export function GetServer(
  app: Express.Application,
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
    lobbyServer.AddSocket(socket);
  });

  http.listen(4000, () => {
    console.log('listening on *:4000');
  });
  return io;
}
