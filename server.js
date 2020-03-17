const express = require('express');
const PostsRouter = require('./data/Posts/PostsRouter');
const morgan = require('morgan');
const server = (express());
server.use(express.json());
server.use(morgan('dev'))
server.use('/api/posts', PostsRouter);

server.get('/', (req, res) => {
    res.send('hello from server.js')
})

module.exports = server;