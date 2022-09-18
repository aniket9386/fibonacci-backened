require('dotenv').config();

import connectToMongo from './db';
import express, { json } from 'express';
import cors from 'cors';

connectToMongo();
const app = express();
const port = process.env.PORT;

app.use(cors())


app.use(json());

// Available routes
app.use('/api/auth', require('./routes/auth'))


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})