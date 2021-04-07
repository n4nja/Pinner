exports.run = (client, message, args) => {
    if (client.config.admin.includes(message.author.id)) {
        if (!args || args.length < 1) return message.reply("Provide a command name to reload.");
        const commandName = args[0];
        if (!client.commands.has(commandName)) {
            return message.reply("That command does not exist");
        }
        delete require.cache[require.resolve(`./${commandName}.js`)];
        client.commands.delete(commandName);
        const props = require(`./${commandName}.js`);
        client.commands.set(commandName, props);
        message.reply(`The command ${commandName} has been reloaded`);
    }
};