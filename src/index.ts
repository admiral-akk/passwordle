import express from 'express';
import path from 'path';
import {LobbyServer} from './LobbyServer';
import {PollingMessage} from './public/network_events';
import {WordleServer} from './wordle_server';

const server = new WordleServer();
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const lobbyServer = new LobbyServer();
lobbyServer.RegisterLobbyHandlers(app);

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
