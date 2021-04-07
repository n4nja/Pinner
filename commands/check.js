const Discord = require("discord.js");

exports.run = (client, message, args) => {
    if (args[0] !== "advanced") {
        const pinCheckEmbed = new Discord.RichEmbed()
            .setColor(0x002f4f)
            .setTitle("Pinboard Basic Permissions Check")
            .setDescription("Make sure your channel does not have over 49 pins.")
        pinCheckEmbed.addField("Manage Webhooks", message.channel.permissionsFor(message.channel.guild.me).has("MANAGE_MESSAGES") === false ? "Missing" : "Fine")
        pinCheckEmbed.addField("Manage Webhooks", message.channel.permissionsFor(message.channel.guild.me).has("MANAGE_WEBHOOKS") === false ? "Missing" : "Fine")
        pinCheckEmbed.setDescription("As long as Pinboard gives `Fine` for both of these permissions, it should be able to work properly.\n\nAdditionally, if you have not created a #pinboard channel, make sure pinboard has the Manage Channels permission so it can make one by itself once you pin a message.\n\nIf pinboard still refuses to work, run `pin.check advanced`.")
        message.channel.send(pinCheckEmbed).catch(error => {
            return console.log(error);
        })
        //advanced check
    } else {
        const pinCheckEmbed = new Discord.RichEmbed()
            .setColor(0x002f4f)
            .setTitle("Pinboard Advanced Permissions Check")
            .setDescription("**Please verify that Pinboard has all of the permissions listed below:**\n\nManage Messages\nManage Webhooks\nManage Channels\n\n**Also check that:**\n\n#pinboard exists\nA webhook named Pinboard Webhook exists in #pinboard\n\n**Finally, verify that in the #pinboard channel, Pinboard can:**\n\nSend Messages\nSend Embedded Links\n\n**If the problem persists, join our support server by clicking [here](https://discord.gg/jMAxHyz)**")
        message.channel.send(pinCheckEmbed).catch(error => {
            return console.log(error);
        })
    }
}