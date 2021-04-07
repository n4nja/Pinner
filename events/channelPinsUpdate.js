module.exports = (client, channel) => {
    // Check if channel pin list has been altered within 15 seconds
    // This is because you can't differentiate between pins and unpins through the Discord API, so there's a short cooldown where it doesn't try to do things right after it removes a pin
    if (client.pinnedRecently.has(channel.id)) return;
    if (channel.type === "dm") return;

    // Try to get custom settings from db, if nonexistent than set as default pinboard
    let board;
    try {
        board = channel.guild.channels.get(client.settings.getProp(channel.guild.id, "pinChannel"));
    } catch (err) {
        board = channel.guild.channels.find(x => x.name === "pinboard");
    }

    // Check if the pinboard actually exists
    if (!board) {
        //Check if perms to make channel available
        if (channel.guild.me.hasPermission("MANAGE_CHANNELS") === false) return channel.send("Please create a channel titled `pinboard`!");

        // Create channel
        else {
            channel.guild.createChannel('pinboard', 'text')
                .then(newPinChannel => {
                    board = newPinChannel;
                })
                .catch(error => {
                    return console.log(error);
                })
        }
    }

    try {
        if (channel.id === board.id) return;
    } catch(error) {
        console.log(error)
    }

    // The code here isn't written by me, it was taken from the source of Pinboard 1 so it's kinda bad
    // yes i'm throwing shade
    channel.fetchPinnedMessages()
        .then(pins => {
            const pinnedMSG = pins.first();

            if (!pinnedMSG) return; //honestly this should only happen if something funky is going on

            let extras = {
                "atch": undefined,
                "attchURL": ' ',
                "color": 0x99AAB5
            };

            //Image handler
            if (pinnedMSG.embeds[0] !== undefined) {
                if (pinnedMSG.embeds[0].thumbnail !== null) {
                    extras.atch = pinnedMSG.embeds[0].thumbnail.proxyURL
                }
            } else if (pinnedMSG.embeds[0] === undefined) {
                if (pinnedMSG.attachments.first() !== undefined) {
                    extras.atch = pinnedMSG.attachments.first().proxyURL
                }
            }

            //Attachment handler
            if (pinnedMSG.attachments.first() !== undefined && !pinnedMSG.attachments.first().width) {
                extras.attchURL = `[Attachment](${pinnedMSG.attachments.first().url})`
            }

            //color handler
            if (pinnedMSG.member.highestRole) {
                extras.color = pinnedMSG.member.highestRole.color
            }

            client.utils.get("checkForHooks").run(client, board, pinnedMSG, channel, extras);

        })
        .catch(error => {
            return console.log(error);
        })
};