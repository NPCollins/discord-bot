module.exports = {
    name: 'ping',
    description: 'See if the bot is online.',
    execute(message) {
        message.channel.send('Pong.');
    },
};