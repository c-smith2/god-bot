const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  
  console.log("Bot Launched...")
  client.user.setStatus('Online')
  client.user.setPresence({game:{name:'Sanraj sleep ;)',type:3}});
});

client.login(process.env.NDQyMzUxOTA2MTQ5NjI5OTUy.Dc_iZQ.9cNKFhmldxTU_oxwQjHBFJreN1c);
