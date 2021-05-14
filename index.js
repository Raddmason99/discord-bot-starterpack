const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const prefix = '!';

client.on('ready',() => {
    console.log("The bot is online, go check your server!");
});


client.login(process.env.DISCORD_KEY);