exports.run = (client, message, args) => {
    if (!message.mentions.channels.first()) {
        message.channel.send("Specify the custom channel you want to use for Pinboard!")
        return;
    }
    if (!message.member.hasPermission('MANAGE_GUILD')) {
        message.channel.send("You need the manage server permission to change this setting!")
        return;
    }

    const settings = {
        pinChannel: message.mentions.channels.first().id
    }

    client.settings.ensure(message.guild.id, settings);
    client.settings.setProp(message.guild.id, "pinChannel", message.mentions.channels.first().id)
    message.channel.send(`Your custom channel is set as <#${client.settings.getProp(message.guild.id, "pinChannel")}>`)
}
