const express = require('express');
const http = require('http').Server(express);
const socketio = require('socket.io')(http);
const chat = require('./server/chat');
const port = 3030;

chat.initialise(socketio);

socketio.on('connection', (socket) => {
  // new socket connected
  chat.run(socket);
});

http.listen(port, () => {
  console.log('Server started on port', port);
});
