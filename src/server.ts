import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import router from './router';
import config from './config/config';
import { connectDb } from './models';

interface Error {
  status?: number;
  message?: string;
}

const app = express();

app.use(cors());

// Setting up basic middleware for all Express requests
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));

router(app);

connectDb().then(async () => {
  app.listen(config.port, () =>
    console.log(`Example app listening on port ${config.port}!`)
  );
});
