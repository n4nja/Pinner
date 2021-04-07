exports.run = (client, pinHook, pinnedMSG, extras) => {
    pinHook.send('', {
        "username": pinnedMSG.author.username,
        "avatarURL": pinnedMSG.author.avatarURL,
        "embeds": [{
            "color": extras.color,
            "title": `Message Pinned!`,
            "description": `${pinnedMSG.content}\n\n[Jump to Message](https://discordapp.com/channels/${pinnedMSG.guild.id}/${pinnedMSG.channel.id}/${pinnedMSG.id})\n${extras.attchURL}`,
            image: {
                url: extras.atch
            },
            footer: {
                icon_url: client.user.avatarURL,
                text: `Pinboard 2 • #${pinnedMSG.channel.name}`
            }
        }]
    }).catch(error => {
        return console.log(error);
    })
}