exports.run = (client, board, pinnedMSG, channel, extras) => {
    let pinHook;
    board.guild.fetchWebhooks().then(webhooks => {
        pinHook = webhooks.find(x => x.name === "Pinboard Webhook");

        if (!pinHook || pinHook.channelID !== board.id) {
            board.createWebhook("Pinboard Webhook").then(webhook => {
                pinHook = webhook;
            })
        }

        pinnedMSG.unpin();

        client.pinnedRecently.add(channel.id);
        setTimeout(() => {
            client.pinnedRecently.delete(channel.id);
        }, 15000);

        client.utils.get("sendToHook").run(client, pinHook, pinnedMSG, extras);
    })
};