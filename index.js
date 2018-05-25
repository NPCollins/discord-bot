const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.on('ready', () => {
    console.log('Ready!');
});

client.login(token);

client.on('message', message => {
    if (message.content.startsWith(prefix + 'ping')) {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.');
    }
    if (message.content === `${prefix}server`) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    }
    if(message.content.startsWith(prefix + 'meme')) {
        // things with the memes
        message.channel.send('Shits not ready yo');
    }
});