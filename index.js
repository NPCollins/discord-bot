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
    if (message.content.startsWith(prefix + 'ping')) {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.');
    }
    if (message.content === `${prefix}server`) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    }
    if(message.content.startsWith(prefix + 'roll')) {
        
        var roll = (Math.random() * 6 + 1);
        console.log(roll);
        console.log('/n');
        
        message.channel.send('The number is ' + roll);
    }
    if(message.content.startsWith(prefix + 'doggo')) {

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
    if(message.content.startsWith(prefix + 'meow')) {

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
});