import {Request, Response} from 'express';
import express from 'express';
import path from 'path';
import {ToLobbyId} from './public/structs/LobbyId';
import {NewMove} from './public/structs/Move';
import {ToPlayerId} from './public/structs/PlayerId';
import {ServerManager} from './ServerManager';

const app = express();
const port = 3000;
const server = new ServerManager();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

AddGetEndpoint(app, '/start_lobby', (req, res) =>
  res.json(server.StartLobby())
);
AddGetEndpoint(app, '/join_lobby/:lobbyId', (req, res) => {
  const lobbyId = req.params.lobbyId;
  res.json(server.JoinLobby(ToLobbyId(lobbyId)));
});
AddGetEndpoint(app, '/get_state/:lobbyId/:playerId', (req, res) => {
  const lobbyId = req.params.lobbyId;
  const playerId = req.params.playerId;
  res.json(server.GetState(ToLobbyId(lobbyId), ToPlayerId(playerId)));
});

app.post('/submit_move/:lobbyId', async (req: Request, res: Response) => {
  try {
    const lobbyId = req.params.lobbyId;
    const move = req.body as NewMove;
    server.SubmitMove(lobbyId, move);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));

function AddGetEndpoint(
  app: express.Express,
  path: string,
  handler: (req: Request, res: Response) => void
) {
  app.get(path, async (req: Request, res: Response) => {
    try {
      handler(req, res);
    } catch (err) {
      console.error(err);
    }
  });
}
