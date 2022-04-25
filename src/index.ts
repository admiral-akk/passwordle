import express from 'express';
import path from 'path';

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post(`/event`, async ( req: any, res ) => {
  try {
      console.log(`request: ${JSON.stringify(req.body)}`);
      res.json( { id : 1 } );
  } catch ( err ) {
      console.error(err);
      res.json( { error:  `errors`} );
  }
} );

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
