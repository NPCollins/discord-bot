const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready!');
});

client.login('your-token-goes-here');

client.on('message', message => {
<<<<<<< HEAD
    if (message.content === '!ping') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.');
    }
});
=======
    console.log(message.content);
});

if (message.content === '!ping') {
    // send back "Pong." to the channel the message was sent in
    message.channel.send('Pong.');
}

if (message.content === '!pong') {
    // send back "Pong." to the channel the message was sent in
    message.channel.send('Ping Ping!');
}
>>>>>>> c131022d2e31b853fe57c8b051fec5c319f09f1e
