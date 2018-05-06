const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  
  console.log("Bot Launched...")
  client.user.setStatus('Online')
  client.user.setPresence({game:{name:'your screams of agony',type:2}});
});

client.login(process.env.BOT_TOKEN);
