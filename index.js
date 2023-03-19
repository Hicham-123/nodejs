
import express from 'express'
import router from "./router.js";
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import passport from 'passport';
import dotenv from 'dotenv';

import database from './connexion.js'

import notreStrategy from './auth/strategies.js'

database.sync()

dotenv.config();

const app = express();

app.use(helmet())
app.use(compression())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(passport.initialize())

passport.use(notreStrategy)

app.use("/",router);


const port = process.env.PORT || 5000;


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})