var mqtt = require('mqtt');
var url  = 'mqtt://192.168.11.51:1883';

var client = mqtt.connect(url, {
  clientId: 'mqtt-sub-',
  clean: false,
  username: 'admin',
  password: 'admin'
});

client.on('connect', function () {
  client.subscribe('airasoul', { qos: 1 });
});

client.on('message', function (topic, message) {
  console.log('received message ',  message.toString());
});
