import express from 'express'
import dotenv  from 'dotenv'
import connectionDB from './config/DB.config.js';
import cookieParser from 'cookie-parser';

import SignUpRouter from './routes/login.routes.js'

const app = express();
dotenv.config();
connectionDB();

app.use(cookieParser());
app.use(express.json());
app.use(express.static('public'));

app.use('/api',SignUpRouter);

const PORT = process.env.PORT || 3001
app.listen(PORT,()=>{
    console.log(`app is runnig on port ${PORT}`);
})