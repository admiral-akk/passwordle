import express from 'express';
import path from 'path';
import {GameServerSocket} from './game/GameServerSocket';
import {GameServerManager} from './GameServerManager';
import {LobbyServerSocket} from './lobby/LobbyServerSocket';
import {GetServer} from './NetworkTypes';
import {NewLobbyServer} from './newLobby/NewLobbyServer';
import {PlayerId} from './PlayerId';
import {SocketManager} from './SocketManager';

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const lobbyServer = new NewLobbyServer(EnterGame);
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

function HandoffLobby(players: LobbyServerSocket[]) {
  const gamePlayers = players.map(
    gameServerSocket => gameServerSocket as LobbyServerSocket
  );
  gameServer.EnterGame(gamePlayers);
}

function HandoffGame(players: GameServerSocket[]) {
  const lobbyPlayers = players.map(
    lobbyServerSocket => lobbyServerSocket as GameServerSocket
  );
}

app.get('/', async (req, res) => {
  // Return the articles to the rendering engine
  res.render('index');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
