const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
    console.log('I am ready!');
});
 
client.on('message', message => {
    if (message.content === 'ping') {
       message.reply('pong');
       }
});
 
client.login(process.env.NjgyNDMyMjcyOTU5Mjc1MTIz.Xlnd1g.iwKpTB-N6ur2m8uZGh_R4WJ1Q8g);//BOT_TOKEN is the Client Secret
