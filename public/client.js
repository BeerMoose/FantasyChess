
let myColor = false;
const myName = false;

window.WebSocket = window.WebSocket || window.MozWebSocket;

if (!window.WebSocket) console.log('Sorry, but your browser doesnt support WebSockets');

const connection = new WebSocket('ws://172.17.31.17:1337');

connection.onmessage = (message) => {
  try {
    let json = JSON.parse(message.data);
    if (json.type === 'color') {
      myColor = json.data;
    } else if (json.type === 'history') {
      console.log('history: ', json.data);
    } else if (json.type === 'message') {
      console.log('message: ', json.data);
    } else {
      console.log('unknown json-data type', json);
    }
  } catch (e) {
    console.log('This doesn\'t look like a valid JSON: ', message.data);
  }
};

setInterval(() => {
  console.log(myColor, myName);
  if (connection.readyState !== 1) {
    console.log('Unable to comminucate with the WebSocket server');
  }
}, 10 * 1000);

let sendStuff = () => {
  connection.send('{"test": true, "msg": "some sample" }');
};
