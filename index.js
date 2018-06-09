const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Ready!');
});

client.login(token);

client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();
    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    }
    else if (command === 'server') {
        client.commands.get('server').execute(message, args);
    }
    else if(command === 'roll') {
        client.commands.get('roll').execute(message, args);
    }
    else if(command === 'doggo') {

        client.commands.get('doggo').execute(message, args);
    }
    else if(command === 'meow') {

        client.commands.get('meow').execute(message, args);
    }
    else if (command === 'avatar') {
        client.commands.get('avatar').execute(message, args);
    }
});