import {Server} from 'socket.io';
import {
  InterServerEvents,
  ServerSocket,
  SocketData,
  Updates,
  Actions,
} from '../network/NetworkTypes';
import {PlayerId, ToPlayerId} from '../structs/PlayerId';

import {LobbyServer} from '../lobby/server/LobbyServer';
import {GameServer} from './game/GameServer';

export class GlobalServer {
  private server: Server<Actions, Updates, InterServerEvents, SocketData>;
  private playerSockets: Record<PlayerId, ServerSocket> = {};
  private lobbyServer: LobbyServer;
  private gameServer: GameServer;

  EnterGame(players: PlayerId[]) {
    const gameSockets = players.map(player => this.playerSockets[player]);
    this.gameServer.StartGame(gameSockets);
  }

  private PlayerConnected(socket: ServerSocket) {
    socket.on('disconnect', () => {
      this.lobbyServer.PlayerDisconnected(socket.data.playerId!);
      this.gameServer.PlayerDisconnected(socket.data.playerId!);
      this.PlayerDisconnected(socket);
    });
    this.playerSockets[socket.data.playerId!] = socket;
    this.lobbyServer.PlayerJoins(socket);

    socket.onAny((...args: any[]) => {
      args.forEach(arg => {
        console.log(`Arg: ${arg}`);
      });
    });
  }

  private PlayerDisconnected(socket: ServerSocket) {
    delete this.playerSockets[socket.data.playerId!];
  }

  constructor(app: Express.Application) {
    const http = require('http').Server(app);
    this.server = new Server<Actions, Updates, InterServerEvents, SocketData>(
      http
    );
    this.lobbyServer = new LobbyServer((players: PlayerId[]) =>
      this.EnterGame(players)
    );
    this.gameServer = new GameServer();
    this.server.on('connection', socket => {
      socket.data.playerId = ToPlayerId(socket);
      this.PlayerConnected(socket);
    });
    http.listen(4000, () => {
      console.log('listening on *:4000');
    });
  }
}
