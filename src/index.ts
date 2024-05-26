import express from 'express';
import 'dotenv/config';
import connectToDb from './utils/connectToDb';
import router from './routes';

const app = express();
app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log('Server running on port: 3000');
  connectToDb();
});
