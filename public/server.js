const webSocketsServerPort = 1337;
const WebSocketServer = require('websocket').server;
const http = require('http');


let history = [];
let clients = [];



let colors = ['red', 'green', 'blue', 'magenta', 'purple', 'plum', 'orange'];
colors.sort((a, b) => Math.random() > 0.5);


let server = http.createServer((request, response) => {});

server.listen(webSocketsServerPort, () => {
  console.log(' Server is listening on port ' + webSocketsServerPort);
});

let wsServer = new WebSocketServer({ httpServer: server });

wsServer.on('request', (request) => {
  console.log('history = ', history);
  console.log('clients = ', clients.length + 1);
  let connection = request.accept(null, request.origin);

  let index = clients.push(connection) - 1;
  let userName = false;
  let userColor = false;

  // send back chat history
  if (history.length > 0) {
    connection.sendUTF(JSON.stringify({ type: 'history', data: history }));
  }

  // user sent message
  connection.on('message', (message) => {
    if (message.type === 'utf8') {
      if (userName === false) { // first message sent by user

        console.log('init connection:', JSON.parse(message.utf8Data));

        userName = message.utf8Data; // fix username

        userColor = colors.shift();
        connection.sendUTF(JSON.stringify({ type: 'color', data: userColor }));
      } else {

        console.log('known user:', JSON.parse(message.utf8Data));
        // history
        let obj = {
          time: (new Date()).getTime(),
          text: message.utf8Data,
          author: userName,
          color: userColor
        };
        history.push(obj);
        history = history.slice(-100);

        // broadcast message to all connected clients
        let json = JSON.stringify({ type: 'message', data: obj });
        for (let i = 0; i < clients.length; i++) {
          clients[i].sendUTF(json);
        }
      }
    }
  });

  connection.on('close', (connection) => {
    if (userName !== false && userColor !== false) {
      // console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
      clients.splice(index, 1);
      colors.push(userColor);
    }
  });

});
