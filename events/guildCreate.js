module.exports = (client, guild) => {
    console.log(`Ready for ${client.channels.size} channels, ${client.guilds.size} servers, and ${client.users.size} users.`);
    client.user.setActivity(`for new pins on ${client.guilds.size} servers | pin.help`, {
        type: 'WATCHING'
    }).catch(error => {
        return console.log(error);
    })
};