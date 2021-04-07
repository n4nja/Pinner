exports.run = (client, message, args) => {
    message.channel.send(`Pong! Response time: ${Math.floor(client.ping)} milliseconds`).catch(console.error);
}