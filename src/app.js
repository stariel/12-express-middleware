'use strict';

// Debug Utility (needs to be required in the old node way)
// const debug = require('debug')('app');

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import errorHandler from './middleware/error.js';
import notFound from './middleware/404.js';

let app = express();

// let corsOptions = {
//   origin: 'http://example.com'
// };
app.use(cors());


app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

import router from './api/api.js';
app.use(router);

app.use(notFound);

app.use(errorHandler);

let isRunning = false;

module.exports = {
  start: (port) => {
    if(! isRunning) {
      app.listen(port, (err) => {
        if(err) { throw err; }
        // Tick the running flag
        isRunning = true;
        console.log('Server is up on port', port);
      });
    }
    else {
      console.log('Server is already running');
    }
  },

  stop: () => {
    app.close( () => {
      isRunning = false;
      console.log('Server has been stopped');
    });
  },

  server:app,
};