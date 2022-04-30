import {Server} from 'socket.io';
import {GameServerToClientEvents} from './game/client/GameNetworkEvents';
import {
  LobbyClientToServerEvents,
  LobbyServerToClientEvents,
} from './lobby/client/LobbyNetworkEvents';
import {LobbyServer} from './lobby/LobbyServer';
import {LobbySocketData} from './lobby/LobbyServerSocket';
import {LobbyServerManager} from './LobbyServerManager';

export interface ServerToClientEvents
  extends LobbyServerToClientEvents,
    GameServerToClientEvents {}
export interface ClientToServerEvents
  extends LobbyClientToServerEvents,
    GameServerToClientEvents {}

export interface InterServerEvents {
  HandoffLobby: (lobby: LobbyServer) => void;
}
export interface SocketData extends LobbySocketData {
  name: string;
  playerIndex: number;
}

export function GetServer(
  app: Express.Application,
  lobbyServer: LobbyServerManager
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
