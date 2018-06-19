
'use strict';

const superagent = require('superagent');
const app = require('../src/app.js');

describe('Simple Web Server', () => {

  beforeAll( () => {
    app.start(3000);
  });

  afterAll( () => {
    app.stop();
  });