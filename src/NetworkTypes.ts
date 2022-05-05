import {Server, Socket} from 'socket.io';
import {GameServerToClientEvents} from './game/client/GameNetworkEvents';
import {
  LobbyClientToServerEvents,
  LobbyServerToClientEvents,
} from './lobby/client/LobbyNetworkEvents';
import {LobbyServer} from './lobby/LobbyServer';
import {LobbySocketData} from './lobby/LobbyServerSocket';
import {
  NewGameClientToServerEvents,
  NewGameServerToClientEvents,
} from './newGame/network/GameNetworkTypes';
import {
  LobbyClientRequests,
  LobbyServerRequests,
} from './newLobby/NewLobbyNetworkTypes';
import {NewLobbyServer} from './newLobby/NewLobbyServer';
import {PlayerId, ToPlayerId} from './PlayerId';
import {SocketManager} from './SocketManager';

export interface ServerToClientEvents
  extends LobbyServerToClientEvents,
    GameServerToClientEvents,
    NewGameClientToServerEvents,
    LobbyClientRequests {}
export interface ClientToServerEvents
  extends LobbyClientToServerEvents,
    GameServerToClientEvents,
    NewGameServerToClientEvents,
    LobbyServerRequests {}

export interface InterServerEvents {
  HandoffLobby: (lobby: LobbyServer) => void;
}
export interface SocketData extends LobbySocketData {
  name: string;
  playerIndex: number;
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
