import express from 'express';
import path from 'path';
import {GameServerManager} from './GameServerManager';
import {LobbyServer} from './lobby/server/LobbyServer';
import {GetServer} from './NetworkTypes';
import {PlayerId} from './structs/PlayerId';
import {SocketManager} from './SocketManager';

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const lobbyServer = new LobbyServer(EnterGame);
const gameServer = new GameServerManager(ExitGame);
const socketManager = new SocketManager();

GetServer(app, socketManager, lobbyServer);

function EnterGame(players: PlayerId[]) {
  const gameSockets = socketManager.GetSockets(players);
  gameServer.EnterGame(gameSockets);
}

function ExitGame(players: PlayerId[]) {
  const lobbySockets = socketManager.GetSockets(players);
  lobbyServer.EndGame(lobbySockets);
}

app.get('/', async (req, res) => {
  // Return the articles to the rendering engine
  res.render('index');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
