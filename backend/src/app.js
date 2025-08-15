import express from 'express';
import Userroute from './routes/Userroute.js'

const app = express();


app.use(express.json());


app.get('/', (req, res) => {
  res.status(200).send('✅ Backend is working fine!');
});


app.use('/api/users', Userroute);

export default app;
