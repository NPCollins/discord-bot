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
// To do: add structure for cooldowns

client.on('ready', () => {
    console.log('Ready!');
});

client.login(token);

client.on('message', message => {
    //  restarts if message doesnt have the prefix or comes from the bot
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    //  allows use of aliases in commands-- restarts if command name isn't a name or alias
    const command = client.commands.get(commandName)
         || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;


    const args = message.content.slice(prefix.length).split(' ');
    const commandName = args.shift().toLowerCase();

    //  check to see that arguments are supplied if needed
    if (command.args && !args.length) {
        let reply = `You didn't provide any arguments, ${message.author}!`;

        //  Will describe proper usage if defined in command.
        if (command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }

        return message.channel.send(reply);

    }

    //  Makes guildOnly commands only usable in server and not in DMs
    if (command.guildOnly && message.channel.type !== 'text') {
        return message.reply('I can\'t execute that command inside DMs!');
    }

    command.execute(message, args);
});