import express from 'express';
import path from 'path';
import {GameServer} from './game/GameServer';
import {GameServerSocket} from './game/GameServerSocket';
import {Lobby} from './lobby/Lobby';
import {LobbyServer} from './lobby/LobbyServer';
import {GetServer} from './NetworkTypes';
import {PollingMessage} from './public/network_events';
import {WordleServer} from './wordle_server';

const server = new WordleServer();
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

app.post('/event', async (req, res) => {
  try {
    console.log(`Recieved request: ${JSON.stringify(req.body)}`);
    server.HandleEvent(req.body).then(event => {
      res.json(event);
    });
  } catch (err) {
    console.error(err);
    res.json({error: 'errors'});
  }
});

app.post('/new_game', async (req, res) => {
  try {
    server.HandleEvent(req.body).then(event => {
      res.json(event);
    });
  } catch (err) {
    console.error(err);
    res.json({error: 'errors'});
  }
});

app.get('/poll/:gameId', async (req, res) => {
  try {
    console.log(`Recieved request: ${JSON.stringify(req.params)}`);
    const request = new PollingMessage(req.params.gameId);
    server.HandlePoll(request).then(event => {
      res.json(event);
    });
  } catch (err) {
    console.error(err);
    res.json({error: 'errors'});
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
