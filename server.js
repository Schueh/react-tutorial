'use strict';

require('babel-register');

const http = require('http');

const express = require('express'),
    React = require('react'),
    ReactDOMServer = require('react-dom/server');

const App = require('./app.jsx');

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname);

app.get('/', (req, res) => {
    const html = ReactDOMServer.renderToString(
        React.createElement(App, {}));
    
    res.render('index', { reactOutput: html });
});

app.use('/', express.static(__dirname));

const server = http.createServer(app);

server.listen(3000, () => {
    console.log('Server is listening on port 3000...');
});