module.exports = {
    name: 'flipcoin',
    description: 'Flips a coin',
    execute(message, args) {
        let randomNum = Math.floor(Math.random() * 2);
        if(randomNum === 0) {
            message.channel.send('It\'s **HEADS**');
        }
        else {
            message.channel.send('It\'s **TAILS**');
        }

    },
};