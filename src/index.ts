import express from 'express';
import path from 'path';
import {GameServer} from './game/GameServer';
import {GameServerManager} from './GameServerManager';
import {LobbyServer} from './lobby/LobbyServer';
import {LobbyServerManager} from './LobbyServerManager';
import {GameToLobby, GetServer, LobbyToGame} from './NetworkTypes';

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const lobbyServer = new LobbyServerManager(HandoffLobby);
const gameServer = new GameServerManager(HandoffGame);

GetServer(app, lobbyServer);

function HandoffLobby(lobby: LobbyServer) {
  const game = LobbyToGame(lobby);
}

function HandoffGame(game: GameServer) {
  const lobby = GameToLobby(game);
}

app.get('/', async (req, res) => {
  // Return the articles to the rendering engine
  res.render('index');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
