const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const helpCommand = new Discord.RichEmbed()
        .setTitle("Help Command")
        .setDescription("Prefix: `pin.`")
        .setColor(0x002f4f)
        .addField("help", "Gets to this help list")
        .addField("ping", "Checks bot response time")
        .addField("info", "Gives information about Pinboard 2")
        .addField("check", "Checks the basic permissions pinboard needs to work")
        .addField("check advanced", "Advanced troubleshooting")
        .addField("invite", "Lets you invite Pinboard 2 to a server or join our support server.")
        .addField("channel #channel", "Lets you set a custom Pinboard channel.")
    message.channel.send(helpCommand);
}