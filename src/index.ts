import express from 'express';
import path from 'path';
import {WordleServer} from './wordle_server';

const server = new WordleServer();
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

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

app.get('/poll', async (req, res) => {
  try {
    console.log(`Recieved request: ${JSON.stringify(req.body)}`);
    server.HandlePoll(req.body).then(event => {
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
