import express from 'express';
import {PORT} from './config.js'; 

const app = express();                                                                               //define a variable for express app

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});