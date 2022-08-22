const express = require('express');
const POSTROUTE = require('./routes/PostRoute');
const USERROUTE = require('./routes/UserRoute');

const app = express();
app.use(express.json());

app.use('/api/v1/posts', POSTROUTE);
app.use('/api/v1/users', USERROUTE);

module.exports = app;
