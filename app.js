const express = require('express');
const morgan = require('morgan');
const renderRouter = require('./routes/renderRoute');
const apiRouter = require('./routes/apiRoute');

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.use(express.static(`${__dirname}/public`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', renderRouter);
app.use('/api/user', apiRouter);

module.exports = app;
