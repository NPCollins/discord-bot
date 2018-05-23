const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready!');
});

client.login('NDQ4OTAzMjg5NjUyNzcyODY1.DedDZg.Hstox9kalyoMuZ0IvHEiBTnoo2Y');

client.on('message', message => {
    if (message.content === '!ping') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.');
    }
    if (message.content === '!pong') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Ping Ping!');
    }
    if(message.content === '!meme') {
        // things with the memes
        message.channel.send('Shits not ready yo');
    }
});