import express from 'express';
import chalk from 'chalk';
import dotenv from 'dotenv';
//import connection from './src/shared/db/connection.js';
import noteRoutes from "./src/modules/notes/routes/notesroute.js";
import { createConnection } from './src/shared/db/connection.js';
import userRoutes from './src/modules/user/routes/user-route.js';
const app = express(); // here we call express function and get then app function
dotenv.config(); // It will read .env and load env variables in process.env
// app.use(connection);
app.use(express.json());
app.use('/', noteRoutes);
app.use('/', userRoutes);
const server = app.listen(process.env.PORT || 1234, (err) => {
    if(err){
        console.log(chalk.red.bgWhiteBright.bold('Server Crash'), err)
    }
    else{
        console.log(chalk.black.bgGreen.bold('Server is running'), chalk.bgCyan.bold(server.address().port));
        createConnection();
    }
})