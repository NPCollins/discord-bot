const Discord = require('discord.js');
const cheerio = require('cheerio');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

const https = require('https');
const http = require('http');
const doggoUrl = 'https://dog.ceo/api/breeds/image/random';
const kittyUrl = 'http://thecatapi.com/api/images/get?format=html';

client.on('ready', () => {
    console.log('Ready!');
});

client.login(token);

client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.');
    }
    else if (command === 'server') {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    }
    else if(command === 'roll') {
        if (args.length === 0) {
            let roll = Math.floor((Math.random() * 6 + 1));
            console.log(roll);
            console.log('\n');

            message.channel.send('Your number is **' + roll + '**');
        }
        else if (isNaN(args[0])) {
            message.channel.send('**IT HAS TO BE A NUMBER YA DINGUS**');
        }
        else if(args.length > 0) {
            let rolls = [];
            var sum = 0;
            for(i = 0; i < args[0]; i++) {
                currentNum = Math.floor((Math.random() * 6 + 1));
                rolls.push(currentNum);
                sum += currentNum;
            }
            message.channel.send('Your numbers are **' + rolls + '**' + '\n' + 'The total is **' + sum + '**');
        }
    }
    else if(command === 'doggo') {

        https.get(doggoUrl, function(response) {
            // data is streamed in chunks from the server
            // so we have to handle the "data" event
            let buffer = '',
                data;

            response.on('data', function(chunk) {
                buffer += chunk;
            });

            response.on('end', function() {
                // finished transferring data
                // dump the raw data
                console.log(buffer);
                console.log('\n');
                data = JSON.parse(buffer);

                if(data.status == 'success') {
                    message.channel.send(data.message);
                }
            });
        });
    }
    else if(command === 'meow') {

        http.get(kittyUrl, function(response) {
            // data is streamed in chunks from the server
            // so we have to handle the "data" event
            var chunks = [];

            response.on('data', function(chunk) {
                chunks.push(chunk);
            });

            response.on('end', function(err) {
              
                var body = (Buffer.concat(chunks)).toString();
                console.log(body.toString);
                console.log('\n');
                const html = cheerio.load(body);
                // console.log($('img').attr('src'));
                const data = html('img').attr('src');
                message.channel.send(data);
            });
        });
    }
    else if (command === 'avatar') {
        if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: ${message.author.displayAvatarURL}`);
        }
    
        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: ${user.displayAvatarURL}`;
        });
    
        message.channel.send(avatarList);
    }
});