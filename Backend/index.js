import express from 'express';
import {PORT} from './config.js'; 

const app = express(); //define a variable for express app
// const PORT = process.env.PORT || 3000; //define a variable
// app.use(express.json()); //middleware to parse JSON

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});