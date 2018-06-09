module.exports = {
    name: 'args-info',
    description: 'Information about the arguments provided. For testing purposes.',
    args: true,
    usage: '<args1> <args2> ... <argsN>',
    execute(message, args) {
        if (args[0] === 'foo') {
            return message.channel.send('bar');
        }

        message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
    },
};