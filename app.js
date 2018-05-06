const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  
  console.log("Bot Launched...")
  client.user.setStatus('Online')
  client.user.setPresence({game:{name:'Sanraj fuck his cousin',type:3}});
});

client.login(process.env.BOT_TOKEN);
