const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const infoEmbed = new Discord.RichEmbed()
        .setColor(0x002f4f)
        .setTitle("Pinboard 2 Info")
        .setDescription("Created by Sayajiaji#7997 with the permission of Smartie#5434 (the creator of Pinboard 1) over about 3-4 hours of work and testing. Thanks to HoodieBashoo#4667 for helping to test.")
        .addField("New Additions", "Pinboard 2 is a direct upgrade of Pinboard 1 using a new webhook system to better display pins.")
        .addField("Invite Links", "Invite Pinboard 2 to your server by clicking [here](https://discordapp.com/oauth2/authorize?client_id=536326063945547806&scope=bot&permissions=604007441).\nJoin our support server by clicking [here](https://discord.gg/jMAxHyz).")
        .addField("Update Information", `Pinboard 2 is still in beta. Please report any issues to our support server.\nPinboard 2 Version: ${client.package.version}`)
    message.channel.send(infoEmbed);
}
