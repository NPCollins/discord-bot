module.exports = {
    name: 'server',
    description: 'Displays server information',
    execute(message) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    },
};