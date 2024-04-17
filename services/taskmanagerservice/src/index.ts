import express,{Application} from "express";
import { taskRouter } from './task.controller'
import bodyParser from 'body-parser';
import cors from 'cors';
import {connectToDB} from './db.service'

const PORT =  5001;
const app: Application = express();
//connectToDB(); //commented to test app

app.use(express.json());
app.use(bodyParser.json())
app.use(cors())
app.use("/api/task", taskRouter);

app.listen(PORT, 'localhost', () => console.log(`Server running on port ${PORT}`));
