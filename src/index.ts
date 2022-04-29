import express from 'express';
import path from 'path';
import {GameServer} from './game/GameServer';
import {GameServerSocket} from './game/GameServerSocket';
import {Lobby} from './lobby/Lobby';
import {LobbyServer} from './lobby/LobbyServer';
import {GetServer} from './NetworkTypes';

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const lobbyServer = new LobbyServer(HandoffLobby);
GetServer(app, lobbyServer);

function HandoffLobby(lobby: Lobby) {
  const gameSockets = lobby.players.map(
    lobbyServerSocket => lobbyServerSocket as GameServerSocket
  );
  for (let i = 0; i < gameSockets.length; i++) {
    gameSockets[i].data.playerIndex = i;
  }
  const game = new GameServer(gameSockets);
}

app.get('/', async (req, res) => {
  // Return the articles to the rendering engine
  res.render('index');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
