const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const prefix = '!';

client.on('ready',() => {
    console.log("The bot is online!");
});

client.on('message',(message) => {
    if(!message.content.startsWith(prefix)||message.author.bot)return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command =  args.shift().toLowerCase();

    if(command === 'zot'){
        message.channel.send("🤘🤘🤘")
    }
});

client.login(process.env.DISCORD_KEY);