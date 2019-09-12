import * as mongoose from 'mongoose';
import config from '../config/config';
import Row from './row';

const connectDb = () => {
  return mongoose.connect(`${config.db.uri}/${config.db.database}`);
};
const models = { Row };

export { connectDb };

export default models;
