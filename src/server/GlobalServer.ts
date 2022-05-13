import {Server} from 'socket.io';
import {
  InterServerEvents,
  ServerSocket,
  SocketData,
  ToClientEvents,
  ToServerEvents,
} from '../network/NetworkTypes';
import {PlayerId, ToPlayerId} from '../structs/PlayerId';

import {LobbyServer} from '../lobby/server/LobbyServer';
import {GameServerManager} from './GameServerManager';

export class GlobalServer {
  private server: Server<
    ToServerEvents,
    ToClientEvents,
    InterServerEvents,
    SocketData
  >;
  private clients: Record<PlayerId, ServerSocket> = {};
  private lobbyServer: LobbyServer;
  private gameServer: GameServerManager;

  EnterGame(players: PlayerId[]) {
    const gameSockets = players.map(player => this.clients[player]);
    this.gameServer.EnterGame(gameSockets);
  }

  ExitGame(players: PlayerId[]) {
    const lobbySockets = players.map(player => this.clients[player]);
    this.lobbyServer.EndGame(lobbySockets);
  }

  private PlayerConnected(socket: ServerSocket) {
    socket.on('disconnect', () => this.PlayerDisconnected(socket));
    this.clients[socket.data.playerId!] = socket;
    this.lobbyServer.PlayerJoins(socket);

    socket.onAny((...args: any[]) => {
      args.forEach(arg => {
        console.log(`Arg: ${arg}`);
      });
    });
    socket.on('ClientReady', () => socket.emit('ServerReady'));
    socket.emit('ServerReady');
  }

  private PlayerDisconnected(socket: ServerSocket) {
    delete this.clients[socket.data.playerId!];
  }

  constructor(app: Express.Application) {
    const http = require('http').Server(app);
    this.server = new Server<
      ToServerEvents,
      ToClientEvents,
      InterServerEvents,
      SocketData
    >(http);
    this.lobbyServer = new LobbyServer((players: PlayerId[]) =>
      this.EnterGame(players)
    );
    this.gameServer = new GameServerManager((players: PlayerId[]) =>
      this.ExitGame(players)
    );
    this.server.on('connection', socket => {
      socket.data.playerId = ToPlayerId(socket);
      this.PlayerConnected(socket);
    });
    http.listen(4000, () => {
      console.log('listening on *:4000');
    });
  }
}
