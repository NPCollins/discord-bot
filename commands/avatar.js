module.exports = {
    name: 'avatar',
    description: 'Displays the avatar of all mentioned users',
    aliases: ['icon'],
    execute(message) {
        if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: ${message.author.displayAvatarURL}`);
        }

        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: ${user.displayAvatarURL}`;
        });

        message.channel.send(avatarList);
    },
};