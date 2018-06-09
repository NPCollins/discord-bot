module.exports = {
    name: 'flipcoin',
    description: 'Flips a coin',
    execute(message, args) {
        let randomNum = Math.floor((Math.random() * 2 + 1));
        if(randomNum === 1) {
            message.channel.send('It\'s **HEADS**');
        }
        else {
            message.channel.send('It\'s **TAILS**');
        }

    },
};