 //implementation requires cheerio
const cheerio = require('cheerio');
const https = require('https');
const http = require('http');
const kittyUrl = 'http://thecatapi.com/api/images/get?format=html';

module.exports = {
    name: 'meow',
    description: 'Pulls a random picture of an adorable kitter',
    execute(message, args) {
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
    },
};