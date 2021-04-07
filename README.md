# Pinboard-2
An alternative to Discord's pin system using webhooks.

Based off of [Pinboard](https://github.com/SmartieCodes/pinboard) by Autumn.

Support Server: https://discord.gg/xKT32ke

Add to your server: https://discordapp.com/oauth2/authorize?client_id=536326063945547806&scope=bot





# Injuns' edit: Sayajiaji's support server is still up but he no longer actively develops this bot, and he has taken down his publicly hosted instance of Pinboard 2 along with his original github repository. Pinboard 2 was an essential tool on thousands of servers before it was taken down and I would like to keep it alive until Discord removes their pin limits. I have nothing but respect and appreciation for Sayajiaji for all the time and hard work it took to develop this bot for us.

# This bot allows us to bypass the 50-pin limit per channel on Discord by automatically reposting pinned messages into their own channel instead of in the Pinned Messages section.

# To get Pinboard 2 running:

- Install Nodejs on your platform of choice. It runs on just about every modern operating system out there, even on Android phones via Termux.

- Install the Nodejs dependency packages listed in the "package.json" file by opening your Terminal/Command Prompt in the Pinboard-2 folder and typing "npm install".
// This should automatically install all of the required dependencies in a single command. You can also install each dependency individually by typing "npm install (package name)".

- Then go to the [Discord Development Portal](https://discord.com/developers/applications) (https://discord.com/developers/applications) and create a bot and enable the "PRESENCE INTENT" and "SERVER MEMBERS INTENT" settings in the "Bot" tab, set up the name and profile picture how you want, then copy the bot token.

- Paste your bot token into the "config.json" file over the part that says "discord_token".
// The bot token needs to be inside of the quotes so keep the quotes.

- Open your Terminal/Command Prompt in the Pinboard-2 folder and type "node index.js" to launch it.
// "node ." also works and is just a shortcut built into nodejs to save time.

- Go back to the General Information tab in the Discord Development Portal and make an invite link by copying your bot's Client ID tab and pasting it in the "client_id=" section of a link like this: https://discord.com/oauth2/authorize?client_id=xxxxxxxxxxxxxxxxxxxxx&scope=bot&permissions=604007441

- Pinboard 2 itself requires the "Manage Messages", "Manage Webhooks", "Manage Channels", "Read Messages" "Send Messages", and "Send Embedded Links" permissions to function properly.
// You can add "&permissions=604007441" to your invite link to automatically grant those permissions upon joining. If you do not include it in your invite link then you can also manually grant Pinboard 2 those permissions from your server settings in Discord.

- Alternatively, instead of granting "Read Messages", "Send Messages", and "Send Embedded Links" as server-wide permissions you can grant them as channel permissions in the newly created #pinboard channel.
// If you choose this option you can also use "&permissions=536879120" on your invite link.



# Common Problems and Solutions:

- Discord API restrictions require Pinboard 2 to take a 15 second cooloff period between pins. Messages that are pinned before the 15 seconds are up are ignored and pinned to the regular "Pinned Messages" section of the channel.
// To fix the improperly pinned message you must shut down Pinboard 2 in your Terminal/Command Prompt, unpin the message from the "Pinned Messages" section in your Discord channel, then restart Pinboard 2 in your Terminal/Command Prompt, then pin the message again. If done properly, this will send the message to the proper #pinboard channel.

- Pinboard 2 will copy text and images files to the #pinboard channel but only a link to a video is pinned instead of another copy of the video file.
// I have found no fix for this yet.

- Pinboard 2 doesn't pin messages from other bots or users who have left your Discord server.
// I have found no fix for this yet. An error in your Terminal/Command Prompt may be thrown when this happens but it's safe and doesn't crash Pinboard 2.

- Pinboard 2 won't pin messages from certain users and throws up the Terminal/Command Prompt error:

"TypeError: Cannot read property 'highestRole' of null
    at xxxxxxxx/Pinboard-2/events/channelPinsUpdate.js:69:34
    at processTicksAndRejections (node:internal/process/task_queues:93:5)"

// The "PRESENCE INTENT" and "SERVER MEMBERS INTENT" settings are not enabled in the "Bot" tab of your Discord Developer Portal. Enabling them should fix this.



# If you encounter any more problems or want to leave feedback, please file an issue on [My Github](https://github.com/Injuns4Trump/Pinboard-2/) at https://github.com/Injuns4Trump/Pinboard-2/ or visit [Sayajiaji's support Discord server](https://discord.gg/t6rGSZM) at https://discord.gg/t6rGSZM

# If you have the ability to fix any of these issues please feel free to make a pull request.
