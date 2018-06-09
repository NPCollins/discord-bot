const https = require('https');
const doggoUrl = 'https://dog.ceo/api/breeds/image/random';

module.exports = {
    name: 'doggo',
    description: 'Pulls a random picture of a cute pupper',
    execute(message) {
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
    },
};