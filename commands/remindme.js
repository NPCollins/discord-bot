const moment = require('moment');

module.exports = {
    name: 'remindme',
    description: 'Dms the caller after the specified amount of time.',
    args: true,
    usage: '<days> <hours> <minutes> <seconds> <message>',
    execute(message, args) {
        message.channel.send('Current Time: ' + moment().format('MMMM Do YYYY, h:mm:ss a'));
        moment().add(args[0], 'days');
        moment().add(args[1], 'hours');
        moment().add(args[2], 'minutes');
        moment().add(args[3], 'seconds');
        message.channel.send('Alright, I\'ll dm you in ' + args[0] + ' days, ' + args[1] + ' hours, ' + args[2] + ' minutes, and ' + args[3] + ' seconds.'
            + '\n' + 'This is a work in progress and probably won\'t work correctly');
        const timer = (1000 * 60 * 60 * 24 * args[0]) + (1000 * 60 * 60 * args[1]) + (1000 * 60 * args[2]) + (1000 * args[3]);
        let note = 'Reminded!';
        if(args.length > 4) {
            note = '';
            for(let i = 4; i < args.length; i++) {
                note += args[i] + ' ';
            }
        }
        setTimeout(sendDM, timer, message, note);
    },
};

function sendDM(message, note) {
    message.author.send(note);
}