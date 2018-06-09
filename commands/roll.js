module.exports = {
    name: 'roll',
    description: 'Rolls a specified number of d6s',
    execute(message, args) {
        if (args.length === 0) {
            let roll = Math.floor((Math.random() * 6 + 1));
            console.log(roll);
            console.log('\n');

            message.channel.send('Your number is **' + roll + '**');
        }
        else if (isNaN(args[0])) {
            message.channel.send('**IT HAS TO BE A NUMBER YA DINGUS**');
        }
        else if(args.length > 0) {
            let rolls = [];
            var sum = 0;
            for(i = 0; i < args[0]; i++) {
                currentNum = Math.floor((Math.random() * 6 + 1));
                rolls.push(currentNum);
                sum += currentNum;
            }
            message.channel.send('Your numbers are **' + rolls + '**' + '\n' + 'The total is **' + sum + '**');
        }
    },
};