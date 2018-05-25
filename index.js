const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.on('ready', () => {
    console.log('Ready!');
});

var http = require("http");
    url = "https://dog.ceo/api/breeds/image/random";

    var request = http.get(url, function (response) {
        // data is streamed in chunks from the server
        // so we have to handle the "data" event    
        var buffer = "", 
            data,
            route;
    
        response.on("data", function (chunk) {
            buffer += chunk;
        }); 
    
        response.on("end", function (err) {
            // finished transferring data
            // dump the raw data
            console.log(buffer);
            console.log("\n");
            data = JSON.parse(buffer);
        }); 
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
    if(message.content.startsWith(prefix + 'doggo')) {
        
        if(data.status == 'success') {
            message.channel.send(data.message);
        }
    }
});