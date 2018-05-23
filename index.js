const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
    console.log('Ready!');
});

client.login(config.token);

client.on('message', message => {
    if (message.content === '!ping') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.');
    }
    if (message.content === '!pong') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Ping Ping!');
    }
});