module.exports = {
    name: 'ping',
    description: 'See if the bot is online.',
    execute(message, args) {
        message.channel.send('Pong.');
    },
};