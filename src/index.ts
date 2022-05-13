import express from 'express';
import path from 'path';
import {GlobalServer} from './server/GlobalServer';

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const server = new GlobalServer(app);

app.get('/', async (req, res) => {
  // Return the articles to the rendering engine
  res.render('index');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
