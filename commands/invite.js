const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const inviteEmbed = new Discord.RichEmbed()
        .setColor(0x002f4f)
        .setTitle("Pinboard 2 Invite Links")
        .setDescription("Invite Pinboard 2 to your server by clicking [here](https://discordapp.com/oauth2/authorize?client_id=536326063945547806&scope=bot&permissions=604007441).\nJoin our support server by clicking [here](https://discord.gg/jMAxHyz).")
    message.channel.send(inviteEmbed);
}