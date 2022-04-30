import express from 'express';
import path from 'path';
import {GameServerSocket} from './game/GameServerSocket';
import {GameServerManager} from './GameServerManager';
import {LobbyServerSocket} from './lobby/LobbyServerSocket';
import {LobbyServerManager} from './LobbyServerManager';
import {GetServer} from './NetworkTypes';

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const lobbyServer = new LobbyServerManager(HandoffLobby);
const gameServer = new GameServerManager(HandoffGame);

GetServer(app, lobbyServer);

function HandoffLobby(players: LobbyServerSocket[]) {
  const gamePlayers = players.map(
    gameServerSocket => gameServerSocket as LobbyServerSocket
  );
  gameServer.NewGame(gamePlayers);
}

function HandoffGame(players: GameServerSocket[]) {
  const lobbyPlayers = players.map(
    lobbyServerSocket => lobbyServerSocket as GameServerSocket
  );
  lobbyServer.RematchMenu(lobbyPlayers);
}

app.get('/', async (req, res) => {
  // Return the articles to the rendering engine
  res.render('index');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
