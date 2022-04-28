import express from 'express';
import path from 'path';
import { Server } from 'socket.io';
import {LobbyServer} from './LobbyServer';
import { ClientToServerEvents,ServerToClientEvents} from './public/network/NetworkTypes';
import {PollingMessage} from './public/network_events';
import { InterServerEvents, SocketData } from './ServerNetworkTypes';
import { ServerSocket } from './ServerSocket';
import {WordleServer} from './wordle_server';

const server = new WordleServer();
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const lobbyServer = new LobbyServer();
lobbyServer.RegisterLobbyHandlers(app);


const http = require("http").Server(app);
const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(http);

const sockets = []; 

io.on("connection", (socket) => {
  sockets.push(new ServerSocket(socket));
});


const wsServer = http.listen(4000, function() {
  console.log("listening on *:4000");
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
